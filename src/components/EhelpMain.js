import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../firebase.js'
import { save,url } from './function'

let arr = [];
const EhelpMain = () => {
  let [display, setDisplay] = useState([]);
  useEffect(() => {

    onValue(ref(database, 'users'), (snapshot) => {
      snapshot.forEach((Childsnapshot) => { arr.push(Childsnapshot.val()) });
      setDisplay(arr); 
    }
    );
    
  }, [])


  
  return (
    <>
      {
        display.length === 0 ? ('') : display.map((element, i) => {
         url(element.patientname,i)
          return (

            <div className="list-group mt-3" key={element.patientname}
             style={{backgroundColor:'rgb(255, 233, 174)'}}>

              <div className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">

                  <h6 className="mb-1">{element.patientname}</h6>
                  <small>Financial Support Needed :{element.rupees}</small>
                  <small>Financial Support Provided : {element.amount}</small>
                  <small>UPI : {element.upi}</small>
                  <a  className='urlfile'>
                    <small>Medical Proofs</small></a>
                </div>

                <p className="mb-1">{element.issue}</p>
                <button type="button" className="btn btn-info">
                  Number of people who helped <span className="badge bg-success">
                    {element.numberofpeople}</span>
                </button>
              </div>

              <div>

                <input placeholder='Enter to Contribute'
                 className="btn submitrupee"/>

                <button value={i} onClick={(e) => save(e)} type="button" 
                className="btn btn-outline-success">Help</button>

              </div>
            </div>
          )
        })
      }
    </>
  )

}

export default EhelpMain;
export { arr }
