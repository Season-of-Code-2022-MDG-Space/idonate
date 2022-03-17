import React from 'react';
import { signin, signout, signup } from './Auth';

const Usersignup = () => {
    return ( <>
        <div className="ngoform">

            <div className="input-group mb-3 ngoinput">
                <input type="text" className="form-control"
                    id="userinput" placeholder="User Name"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div className="input-group mb-3 ngoinput">
                <input type="email" className="form-control"
                    id="emailinput" placeholder="Enter Email Id"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

            <div className="input-group mb-3 ngoinput">
                <input type="password" className="form-control"
                    id="password" placeholder="Password"
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div> 
        </div>
         <button type="button" className="btn btn-primary ngoinput" 
         onClick={signup}>Sign Up</button>

         <button type="button" className="btn btn-success ngoinput" 
          onClick={signin}>Log In</button>

         <button type="button" className="btn btn-danger ngoinput" 
          onClick={signout}>Log Out</button>
          </>
    )
}

export default Usersignup;
