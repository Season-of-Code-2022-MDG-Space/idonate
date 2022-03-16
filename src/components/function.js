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

export { clean };