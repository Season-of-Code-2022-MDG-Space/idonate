import React from 'react'
import { save } from '../components/database'

const Signup = () => {
  return (
    <>


<div className="ngoform">

    <div className="input-group mb-3 ngoinput">
        <input type="text" className="form-control" 
        id="charityname" placeholder="Name of Charity Trust"
         aria-label="Recipient's username" aria-describedby="basic-addon2" />
      </div>

      <div className="input-group mb-3 ngoinput">
        <input type="text" className="form-control" id="url"
         placeholder="URL of Charity Trust" aria-describedby="basic-addon3"/>
      </div>

      <div className="input-group mb-3 ngoinput">
        <input type="text" className="form-control" id="username"
         placeholder="User-Name-Without-Spaces" aria-describedby="basic-addon3"/>
      </div>

      <div className="input-group mb-3 ngoinput">
        <input type="text" className="form-control" id="address" 
        placeholder="Address of Head Office" aria-describedby="basic-addon3"/>
      </div>

      <div className="input-group mb-3 ngoinput">

        <label className="input-group-text">Ratings</label>
        <select className="form-select" id="formratings">
          <option defaultValue={"Choose"}>Choose</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="4">Five</option>
        </select>

      </div>

      <div className="input-group mb-3 ngoinput">

        <label className="input-group-text">Field Of Contribution</label>
        <select className="form-select" id="formfield">
          <option defaultValue={"Choose"}>Choose</option>
          <option>Aged/Elderly</option>
          <option>Education</option>
          <option>Hunger</option>
          <option>Environment</option>
          <option>Health</option>
          <option>Unemployment</option>
        </select>

      </div>

      <div className="input-group ngoinput">
        <span className="input-group-text">About Charity</span>
        <textarea className="form-control" id="description" aria-label="With textarea"></textarea>
      </div>

      <button type="button" className="btn btn-primary" id="ngosubmit" 
      onClick={save}>Submit</button>
     
    </div>

    </>
  )
}

export default Signup;
