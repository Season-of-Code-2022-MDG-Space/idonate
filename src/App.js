// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Ngolist from './components/Ngolist';

function App() {
  let list = [
    { gender: "Male", profession: "Actor" , rating:1 },
    { gender: "Female", profession: "Actor" , rating:2 },
    { gender: "Male", profession: "Entrepreneur" , rating:3 },
    { gender: "Female", profession: "Actor", rating:4 },
    { gender: "Female", profession: "Minister" , rating:5 },
    { gender: "Male", profession: "Entrepreneur", rating:4 },
    { gender: "Male", profession: "Minister" , rating:3},
    { gender: "Female", profession: "Minister" , rating:2},
    { gender: "Male", profession: "Cricketer", rating:1 },
    { gender: "Male", profession: "Actor", rating:4 },
    { gender: "Male", profession: "Cricketer", rating:4 }
  ]

  let applyfilter = () => {
    let x = document.getElementById("mySelect").selectedIndex
    let y = document.getElementById("mySelect").options
    let listbox = document.getElementsByClassName('listbox')

  
    document.getElementById('Search').value=""
    for (let i = 0; i < list.length; i++) {

      if (y[x].text == list[i].gender) {
        listbox[i].style.display = ""
      }
      else if (y[x].text == list[i].profession) {
        listbox[i].style.display = ""
      }
    
      else if(y[x].text=="All") { listbox[i].style.display = ""
     }
     else if(y[x].text==list[i].rating)   listbox[i].style.display = ""
    
      else {
        listbox[i].style.display = "none"
      }
    }

    
  }

  let searchngo = () => {

    let input = document.getElementById('Search')
    input = input.value.toUpperCase()
    let target = document.getElementsByClassName('ngoname')
    let listbox = document.getElementsByClassName('listbox')
    //  console.log(target[1].innerText.toUpperCase());
    let txtValue;
    let x = document.getElementById("mySelect").selectedIndex
    let y = document.getElementById("mySelect").options
   
    for (let i = 0; i <list.length; i++) {
      txtValue = target[i].textContent || target[i].innerText
      txtValue = txtValue.toUpperCase()

      if (txtValue.indexOf(input) > -1) {
        // target[i].style.display = "";
        if(y[x].text=="All")
        listbox[i].style.display = ""
      } else {
        // target[i].style.display = "none";
        listbox[i].style.display = "none"

      }
    }

  }
  return (
    <>
      <Navbar />
      <Searchbar searchngo={searchngo} applyfilter={applyfilter} />
      <Ngolist />

    </>
  );
}

export default App;
