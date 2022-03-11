import list from './list';
let listbox = document.getElementsByClassName('listbox');

let applyfilter = () => {
    let x = document.getElementById("mySelect").selectedIndex;
    let y = document.getElementById("mySelect").options;
    document.getElementById('Search').value = ""
    for (let i = 0; i < list.length; i++) {
        if (y[x].text == list[i].Sector)   listbox[i].style.display = ""
        else if (y[x].text == list[i].State)   listbox[i].style.display = ""
        else if (y[x].text == "All")  listbox[i].style.display = ""
        else if (y[x].text == list[i].Rating) listbox[i].style.display = "";
         else listbox[i].style.display = "none";
        }  }

    
let searchngo = () => {
    let input = document.getElementById('Search');
    input = input.value.toUpperCase();
    let target = document.getElementsByClassName('ngoname');
    let txtValue;
    for (let i = 0; i < list.length; i++) {
        txtValue = target[i].textContent || target[i].innerText
        txtValue = txtValue.toUpperCase()

        if (txtValue.indexOf(input) > -1)  listbox[i].style.display = "";
            else  listbox[i].style.display = "none";
        } }

export {searchngo,applyfilter};