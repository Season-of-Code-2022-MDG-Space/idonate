import { database,set,ref } from '../firebase.js'
import {clean } from './function.js'
function save() {

    let charityname = document.getElementById('charityname').value;
    let url = document.getElementById('url').value;
    let address = document.getElementById('address').value;
    let username = document.getElementById('username').value;
    let description = document.getElementById('description').value;

    let x = document.getElementById("formratings");
    let rating = x.options[x.selectedIndex].text;

    let y = document.getElementById("formfield");
    let field = y.options[y.selectedIndex].text;

    set(ref(database, 'ngos/' + username), {
        Charity_Name:charityname,
        User_Name:username,
        Rating: rating,
        Field_Of_Contribution: field,
        Address:address,
        Url:url,
        About_Charity: description
    });

    alert("Submitted Successfully");
    clean();
}

export { save };