import React from 'react';
import Searchbar from '../components/Searchbar';
import Ngolist from '../components/Ngolist';
import Add from '../components/Add';



function Home() {
  return (
    <>
         
          <Add/>
          <Searchbar/>
          <Ngolist />
        
    </>
  );
}

export default Home;