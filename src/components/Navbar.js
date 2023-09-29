import React from 'react'

import  "./NavbarStyles.css"
import {Link} from "react-router-dom"


const Navbar = () => {


  return (
    <div className = "header">
      <Link className = "header-style" to = "/">
        <h1 >Home</h1>
      </Link>
      <ul>
      <Link className = "header-style" to = "/TodosList">
        <h1>
          TodosList
        </h1>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
