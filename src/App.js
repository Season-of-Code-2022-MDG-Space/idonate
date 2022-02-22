// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Ngolist from './components/Ngolist';

function App() {
  let searchngo=()=>{
   
   let input = document.getElementById('Search')
   input = input.value.toUpperCase()
   let target= document.getElementsByClassName('ngoname')
   let listbox=document.getElementsByClassName('listbox')
  //  console.log(target[1].innerText.toUpperCase());
   let txtValue;
   for(let i=0;i<4;i++){
    txtValue = target[i].textContent || target[i].innerText
    txtValue=txtValue.toUpperCase()
   
    if (txtValue.indexOf(input) > -1) {
      // target[i].style.display = "";
      listbox[i].style.display=""
    } else {
      // target[i].style.display = "none";
      listbox[i].style.display="none"

    }

   }

}
  return (
   <>
   <Navbar/>
   <Searchbar searchngo={searchngo}/>
   <Ngolist/>

   </>
  );
}

export default App;
