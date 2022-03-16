import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../firebase.js'

const EhelpMain = () => {
  let [display, setDisplay] = useState([]);
  let [amount, setAmount] = useState(0);
  let [people, setPeople] = useState(0);
  function save(){
    let input=document.getElementById('submitrupee').value;
           console.log("Reached");
           let r=input+amount
           setAmount(r);
           setPeople(people+1);
  }

  let arr=[];
  useEffect(() => {
     
      onValue(ref(database, 'users'), (snapshot) => {
          snapshot.forEach( (Childsnapshot) =>{ arr.push(Childsnapshot.val())}  );
           setDisplay(arr);        }
                                  );
  
  }, [])
  return (
    <>
    {
    display.length===0 ? (''): display.map((element)=>{
        
     return ( 

    <div className="list-group mt-3" key={element.patientname}>

      <div className="list-group-item list-group-item-action" aria-current="true">
        <div className="d-flex w-100 justify-content-between">

          <h6 className="mb-1">{element.patientname}</h6>
          <small>Financial Support Needed :{element.rupees}</small>
          <small>Financial Support Provided : {amount}</small>
          <small>UPI : {element.upi}</small>

        </div>

        <p className="mb-1">{element.issue}</p>
        <button type="button" className="btn btn-info">
          Number of people who helped <span className="badge bg-success">{people}</span>
        </button>
      </div>

      <button className="btn btn-secondary" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        Wanna To Help</button>

      <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">

          <h5 id="offcanvasTopLabel">Offcanvas top</h5>

          <button type="button" className="btn-close text-reset"
            data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
          <input placeholder='Enter Amount in Rupees' id='submitrupee'/>
          <button onClick={save}></button>
        </div>
      </div>
    </div>
     )})
     }
    </>
  )
}

export default EhelpMain;
