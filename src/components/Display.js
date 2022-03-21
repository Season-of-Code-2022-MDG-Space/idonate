import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../firebase.js'
import Ratings  from './Ratings'
let arr=[];
const Display = () => {

    let [display, setDisplay] = useState([]);

    useEffect(() => {
       
        onValue(ref(database, 'ngos'), (snapshot) => {
            snapshot.forEach( (Childsnapshot) =>{ arr.push(Childsnapshot.val())}  );
             setDisplay(arr);        }
                                    );
    
    }, [])
    return (
        <>
          {
          display.length===0 ? (''): display.map((element,i)=>{

           return ( 

            <div key={element.User_Name} className="card cardbox" value='1'
            style={{width:"18rem",marginTop:"30px",
           width:'300px !important',border:'0px solid black',color:'green'}} >
          
            <div className="card-body">
              <h5 className="card-title">{element.Charity_Name}</h5>
              <p className="card-text">{element.About_Charity}</p>
            </div>
          
            <ul className="list-group list-group-flush list-group-horizontal">
              <li className="list-group-item">Sector: {element.Field_Of_Contribution}</li>
              <li className="list-group-item">Rating: {element.Rating}</li>
              <li className="list-group-item">Address: {element.Address}</li>
            </ul>
          
            <div className="card-body">
              <a href={element.Url} className="card-link" style={{textDecoration:'none'}}>
                Link to {element.Charity_Name}</a>
            </div>
            <Ratings Charity_Name={element.Charity_Name} index={i}/>
          </div>
           
           )
                                                
                                                })}
        </>
    )
}

export default Display;
export { arr };


