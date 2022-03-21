import React, { useEffect } from "react";
import { auth } from '../pages/Auth'
import { set, ref, database, onValue } from '../firebase'


const Ratings = (props) => {

  useEffect(() => {

    if (auth?.currentUser) {
      onValue(ref(database, 'ratings/' + auth.currentUser.uid), (snapshot) => {
        snapshot.forEach(element => {
          document.getElementsByClassName('hup')[element.val().index].style.display = 'none'
        }); }); }
  }, [])



  function ratings(i) {
    if (auth?.currentUser) {
      set(ref(database, 'ratings/' + auth.currentUser.uid + '/' + props.Charity_Name), {
        rating: i,
        index: props.index
      });
      alert("Successfully Rated " + i)  }
      
    else  alert("Please Login In")    }


  return (

    <div className="hup">
      <span className="fa fa-star ratings" onClick={() => ratings(1)}></span>
      <span className="fa fa-star ratings" onClick={() => ratings(2)}></span>
      <span className="fa fa-star ratings" onClick={() => ratings(3)}></span>
      <span className="fa fa-star ratings" onClick={() => ratings(4)}></span>
      <span className="fa fa-star ratings" onClick={() => ratings(5)}></span>

    </div>
  )
}

export default Ratings;
