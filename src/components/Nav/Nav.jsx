import react from 'react'
import './nav.css'
import {NavLink} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'



function Nav(){
  return(
    <div className="navbar">
   <NavLink to="/Content">Profile</NavLink>
   <NavLink to="/Dialogue">Messages</NavLink>
   <NavLink to="/users">Users</NavLink>
    </div>
  )
}


export default Nav