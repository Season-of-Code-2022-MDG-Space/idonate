import React from 'react'
import { submit } from '../components/database';
const Helpform = () => {
    return (

        <div className="ngoform">
            <div className="input-group mb-3 ngoinput">

                <label className="input-group-text">Who Wanna help ?</label>
            <select className="form-select" id='relation'>
                    <option defaultValue={"Choose"}>Choose</option>
                    <option value="1">Yourself</option>
                    <option value="2">Mother</option>
                    <option value="3">Father</option>
                    <option value="4">Son</option>
                    <option value="4">Wife</option>
                </select>

            </div>

            <div className="input-group mb-3 ngoinput" >
                <input type="text" className="form-control"
                    placeholder="Name of Patient" id='patientname'
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div className="input-group mb-3 ngoinput">
                <input type={"tel"} className="form-control" id='phone'
                    placeholder="Mobile Number"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div className="input-group mb-3 ngoinput">
                <input type={"text"} className="form-control" id='disorder'
                    placeholder="Technical Term for medical Issue/disorder"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div className="input-group mb-3 ngoinput">
                <input type={"text"} className="form-control" id='rupees'
                    placeholder="How much Financial help needed (in Rupees)"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div className='ngoinput'>

                <label className="input-group-text">Medical Document as Proof</label>
                <input type={"file"} className="form-control" id='file'
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />

            </div>

            <div className="input-group mb-3 ngoinput">
                <input type={"text"} className="form-control"
                    placeholder="UPI ID for Recieving Help"  id='upi'
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div className="input-group ngoinput">
                <span className="input-group-text">Describe Medical Issue</span>
                <textarea className="form-control" aria-label="With textarea" id='issue'>
                </textarea>
            </div>

            <button type="button" className="btn btn-primary ngoinput" onClick={submit}>
                I Accept above Information to be Correct</button>
        </div>
    
    )
}

export default Helpform;
