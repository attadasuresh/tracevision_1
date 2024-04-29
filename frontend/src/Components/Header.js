import React from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Cookies from 'js-cookie'

const Header = (props) => {


  //LOGIN AND LOGOUT BUTTONS SET COOKIES 
  const lock = Cookies.get("lock")
 
  const logouthandler=()=>{
    Cookies.remove("lock")
    window.location.reload()
    props.history.replace("/")
  }
  const loginthandler=()=>{
    props.history.replace("/login")
  }


  return (
   <>
    <div className="navbar-container">
        <Link to="/" ><img className="navbar-logo" src="images\trace-vision.png" alt="App Logo"/></Link>
        
        {lock?<button className="navbar-login-button" onClick={logouthandler}>Login out</button>:<button onClick={loginthandler} className="navbar-login-button">Login</button>}
        </div>
   </>
  )
}

export default withRouter(Header)