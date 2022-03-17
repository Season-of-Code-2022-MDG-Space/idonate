import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from '../firebase'
import { useEffect, useState } from "react";

export function useCuser() {
    let [cuser, setCuser] = useState();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => { setCuser(user) })
    }, [])
    return cuser;
}

function clean() {
    document.getElementById('userinput').value = '';
    document.getElementById('emailinput').value = '';
    document.getElementById('password').value = '';
}

const auth = getAuth(app);

export function signup() {

    let username = document.getElementById('userinput').value;
    let email = document.getElementById('emailinput').value;
    let password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Created Successfully " + username)

            updateProfile(auth.currentUser, {
                displayName: username
            }).then(() => {

            }).catch((error) => {
                alert(error.message)
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(error.message);

        });
    clean();
}

export function signin() {

    let email = document.getElementById('emailinput').value;
    let password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            const user = userCredential.user;
            alert("Welcome Back " + user.displayName)
        })

        .catch((error) => {
            alert(error.message);
        });

    clean();
}

export function signout() {
    try {
        alert("Signed Out " + auth.currentUser.displayName)
        signOut(auth)
    }
    catch { alert("Error") }
}
