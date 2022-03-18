import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from '../firebase'
import { useEffect, useState } from "react";
import {set,ref,database} from '../firebase'
function clean() {
    document.getElementById('userinput').value = '';
    document.getElementById('emailinput').value = '';
    document.getElementById('password').value = '';
}

const auth = getAuth(app);

export function useCuser() {
    let [cuser, setCuser] = useState();
    useEffect(() => {
       const s= onAuthStateChanged(auth, (user) => { setCuser(user) })
       return s;
    }, [])
    return cuser;
}


export function signup() {

    let username = document.getElementById('userinput').value;
    let email = document.getElementById('emailinput').value;
    let password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Created Successfully ");
            const id=userCredential.user.uid;
            set(ref(database, 'loggedusers/' + id), {
                username:username
             });
        })
        .catch((error) => {
            alert(error.message);
        });
    clean();

}


export function signin() {

    let email = document.getElementById('emailinput').value;
    let password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            alert("Welcome Back " )
        })

        .catch((error) => {
            alert(error.message);
        });

    clean();
}


export function signout() {
    try {
        alert("Signed Out ")
        signOut(auth)
    }
    catch { alert("Error") }
}

export {auth}