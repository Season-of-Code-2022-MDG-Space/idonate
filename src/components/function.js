function clean() {

    document.getElementById('charityname').value = '';
    document.getElementById('url').value = '';
    document.getElementById('address').value = '';
    document.getElementById('username').value = '';
    document.getElementById('description').value = '';
    document.getElementById("formratings").selectedIndex = 0;
    document.getElementById("formfield").selectedIndex = 0;
    
}

export { clean };