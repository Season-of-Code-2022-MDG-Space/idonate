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
        else cardbox[i].style.display = "none";
    }
}


let applyfilter = () => {
    document.getElementById('Search').value = ""
    let a = [];
    let y = document.getElementById('mySelect').options;
    for (let i = 0; i < y.length; i++)
        if (y[i].selected) {
            a.push(y[i].value); if (a[i] === "All") {
                for (let i = 0; i < arr.length; i++)
                    cardbox[i].style.display = ""; return;
            }
        }

    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < arr.length; i++) {

            if (a[j] === arr[i].Field_Of_Contribution && cardbox[i].value !== '0') cardbox[i].style.display = ""
            else if (a[j] === arr[i].Address && cardbox[i].value !== '0') cardbox[i].style.display = ""
            else if (a[j] === "All" && cardbox[i].value !== '0') cardbox[i].style.display = ""
            else if (a[j] === arr[i].Rating && cardbox[i].value !== '0') cardbox[i].style.display = "";
            else { cardbox[i].style.display = "none"; cardbox[i].value = '0'; }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        cardbox[i].value = '1';
    }
}



export { searchngo, applyfilter };