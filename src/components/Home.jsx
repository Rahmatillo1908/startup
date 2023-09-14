import React, { useState } from 'react'
import "./style.css"
import { FaAngleUp } from "react-icons/fa";
function Home() {
  const [scroll, setScroll] = useState(false)
  const add = () => {
    if (window.scrollY <= 500) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }
  window.addEventListener("scroll", add)
  return (
    <div className='home' id='home' >
      <div className="homeBg">
        <img src="https://html.waituk.com/roxine/img/big-14.jpg" alt="" />
      </div>
      <div className="homeText">
        <div className="homeSub">
          <p> GRAPHICS. WEB. DIGITAL. </p>
          <h1>Start - up</h1>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a mollitia dolorem magnam deleniti sequi ea error nisi voluptates culpa?</h6>
          <button className='button' >Explore work</button>
        </div>
      </div>
      {scroll ?<div className="link">
      <a href="#home"> <FaAngleUp /></a>
      </div> : ""}
    </div>
  )
}

export default Home