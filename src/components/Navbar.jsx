import React, { useState } from 'react'
import { SlBasket } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai"
import { BiMenuAltLeft } from "react-icons/bi"
import "./style.css"
function Navbar() {

  const [scrool, setscrool] = useState(true)

  const add = () => {
    if (window.scrollY >= 100) {
      setscrool(false)
    } else {
      setscrool(true)
    }
  }
  window.addEventListener("scroll", add)
  return (
    <div className={scrool ? 'nav1 navbars' : "nav1 navbar1"}  >
      <div className='navbar-container'>
        <div className='navbar-logo'>          
        <p>ROXINE</p>
        </div>
        <div className='navbar-links'>
          <a href="">HOME</a>
          <a href="">FEATURES</a>
          <a href="">PORTFOLIO</a>
          <a href="">ELEMENTS</a>
          <a href="">ABOUT</a>
          <a href="">TEAM</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
          <a href=""><SlBasket /></a>
          <a href=""><AiOutlineSearch /></a>
          <a href=""><BiMenuAltLeft /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar