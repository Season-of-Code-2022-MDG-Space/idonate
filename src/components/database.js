import { database, set, ref } from '../firebase.js'
import { clean, cleanfield } from './function.js'
import { sref, uploadBytes, storage} from '../firebase'

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
        Charity_Name: charityname,
        User_Name: username,
        Rating: rating,
        Field_Of_Contribution: field,
        Address: address,
        Url: url,
        About_Charity: description
    });

    alert("Submitted Successfully");
    clean();
}



export { save };

export function submit() {
    let issue = document.getElementById('issue').value;
    let patientname = document.getElementById('patientname').value;
    let phone = document.getElementById('phone').value;
    let disorder = document.getElementById('disorder').value;
    let rupees = document.getElementById('rupees').value;
    let upi = document.getElementById('upi').value;
    let x = document.getElementById("relation");
    let relation = x.options[x.selectedIndex].text;

    let file = document.getElementById('file').files[0];
    console.log(file)
    
    uploadBytes(sref(storage, 'files/' + patientname), file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });


    
    set(ref(database, 'users/' + patientname), {
        issue: issue,
        patientname: patientname,
        phone: phone,
        relation: relation,
        rupees: rupees,
        upi: upi,
        disorder: disorder,
        amount: 0,
        numberofpeople: 0,
        url:''
    });

    alert("Submitted Successfully");
    cleanfield();
}

