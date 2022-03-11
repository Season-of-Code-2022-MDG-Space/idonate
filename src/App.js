import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Ngolist from './components/Ngolist';
import Add from './components/Add';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Add/>
      <Searchbar/>
      <Ngolist />
      <Footer/>
    </>
  );
}

export default App;
