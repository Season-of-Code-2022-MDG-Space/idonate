// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Ngolist from './components/Ngolist';
import Add from './components/Add';
import Footer from './components/Footer';
function App() {
  let list = [
    { Sector: "Education", State: "Madhya Pradesh" , Rating:3 },
    { Sector: "Aged/Elderly", State: "Uttar Pradesh" , Rating:2 },
    { Sector: "Environment", State: "Maharastra" , Rating:1 },
    { Sector: "Women Empowerment", State: "Madhya Pradesh", Rating:3 },
    { Sector: "Differently Abled", State: "Delhi" , Rating:2 },
    { Sector: "Health", State: "Delhi", Rating:1 },
    { Sector: "Health", State: "Maharasta" , Rating:3},
    { Sector: "Environment", State: "Maharasta" , Rating:2},
    { Sector: "Education", State: "Delhi", Rating:1 },
   
  ]

  let applyfilter = () => {
    let x = document.getElementById("mySelect").selectedIndex
    let y = document.getElementById("mySelect").options
    let listbox = document.getElementsByClassName('listbox')

  
    document.getElementById('Search').value=""
    for (let i = 0; i < list.length; i++) {

      if (y[x].text == list[i].Sector) {
        listbox[i].style.display = ""
      }
      else if (y[x].text == list[i].State) {
        listbox[i].style.display = ""
      }
    
      else if(y[x].text=="All") { listbox[i].style.display = ""
     }
     else if(y[x].text==list[i].Rating)   listbox[i].style.display = ""
    
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
      <Add/>
      <Searchbar searchngo={searchngo} applyfilter={applyfilter} />
      <Ngolist />
      <Footer/>

    </>
  );
}

export default App;
