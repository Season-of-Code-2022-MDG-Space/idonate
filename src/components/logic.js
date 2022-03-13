import { arr } from './Display'

let cardbox = document.getElementsByClassName('cardbox');


let searchngo = () => {
    let input = document.getElementById('Search');
    input = input.value.toUpperCase();
    let txtValue;
    for (let i = 0; i < arr.length; i++) {
        txtValue = arr[i].Charity_Name;
        txtValue = txtValue.toUpperCase();

        if (txtValue.indexOf(input) > -1) cardbox[i].style.display = "";
        else  cardbox[i].style.display = "none";
        } 
}


let applyfilter = () => {
    let x = document.getElementById("mySelect").selectedIndex;
    let y = document.getElementById("mySelect").options;
    let txt=y[x].text;
    document.getElementById('Search').value = ""

    for (let i = 0; i < arr.length; i++) {

        if (txt === arr[i].Field_Of_Contribution)   cardbox[i].style.display = ""
        else if (txt == arr[i].Address)   cardbox[i].style.display = ""
        else if (txt == "All")  cardbox[i].style.display = ""
        else if (txt == arr[i].Rating) cardbox[i].style.display = "";
         else cardbox[i].style.display = "none";

        }  }
        

export {searchngo,applyfilter};