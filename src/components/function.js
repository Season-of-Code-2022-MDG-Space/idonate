import { arr } from './EhelpMain'
import { database, ref, set,storage,getDownloadURL,sref } from '../firebase.js'
import { auth } from '../pages/Auth'
function clean() {

    document.getElementById('charityname').value = '';
    document.getElementById('url').value = '';
    document.getElementById('address').value = '';
    document.getElementById('username').value = '';
    document.getElementById('description').value = '';
    document.getElementById("formratings").selectedIndex = 0;
    document.getElementById("formfield").selectedIndex = 0;

}

export function cleanfield() {
    document.getElementById('issue').value= '';
    document.getElementById('patientname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('disorder').value = '';
    document.getElementById('rupees').value = '';
    document.getElementById('upi').value = '';
    document.getElementById("relation").selectedIndex=0;

}


function save(e){
    let i = e.target.value
    let input = document.getElementsByClassName('submitrupee')[i].value;

    if(auth?.currentUser){


    set(ref(database, 'users/' + arr[i].patientname), {
      issue: arr[i].issue,
      patientname: arr[i].patientname,
      phone: arr[i].phone,
      relation: arr[i].relation,
      rupees: arr[i].rupees,
      upi: arr[i].upi,
      disorder: arr[i].disorder,

      amount: parseInt(input) + parseInt(arr[i].amount),
      numberofpeople: 1 + parseInt(arr[i].numberofpeople),

    });
  
  

    alert("Redirecting to Payment Gateway")  }

    else { alert("Please Log In") }
    document.getElementsByClassName('submitrupee')[i].value='';
}


export function url(patientname,i){

    getDownloadURL(sref(storage, 'files/' + patientname))
    .then((url) => {
       document.getElementsByClassName('urlfile')[i].href=url;
    })
    .catch((error) => {
        
    });
}

export { clean,save };