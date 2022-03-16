import React, { useState } from 'react';
import EhelpMain from '../components/EhelpMain';
const Ehelp = () => {

  let [state,setState]=useState();
  
  return (
    <div>
       
        <a href='/ehelp/helpform' 
        style={{textDecoration:'none'}}> <small style={{marginLeft:'30%',
        marginTop:'20% !important'}}>
          Link for asking financial help in Medical Issues</small></a>
          <EhelpMain/>
        
    </div>
  )
}

export default Ehelp;
