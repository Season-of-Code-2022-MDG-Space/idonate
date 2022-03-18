import React from 'react'
import {useCuser,signout,auth} from '../pages/Auth'


export default function Navbar() {


  let signupbtn=(<div style={{ marginLeft: "50% " }}>
     <a href='/signup0' className="btn btn-danger">Sign-up</a>
  <a href='/signup0/usersignup' className="btn btn-success me-2">Login</a></div>)

  let logoutbtn=(<> <button type="button" className="btn btn-danger" 
                     onClick={signout}>Log Out</button></>) 

   
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-info">

      <div className="container-fluid">

        <a className="navbar-brand orgname" href="/">iDonate</a>

        <button className="navbar-toggler" href='/'
          data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link active tabstext" aria-current="page" href="/" >Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link tabstext" href="/basket">Charity Basket</a>
            </li>

            <li className="nav-item">
              <a className="nav-link tabstext" href="/blog">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link tabstext" href="/ehelp">eHelp</a>
            </li>

            <li className="nav-item">
              <a className="nav-link tabstext" href="/alert">Alerts</a>
            </li>

          </ul>

          

           {useCuser()?(<h5 className='login'><span className="badge bg-secondary">{auth.currentUser.email}
           </span>{logoutbtn}</h5> )  : signupbtn }

         
        </div>
      </div>
    </nav>

  )
}
