import React, { useState } from 'react'
import "./style.css"
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
function Works() {
  const [data, setData] = useState(0)

  const left = () => {
    setData(data === 0 ? data : data - 1)
  }
  const right = () => {
    setData(data === 2 ? data : data + 1)
  }
  return (
    <div className='text-secondary'>
      <div className='works' >
        <h3>WORK PLACE</h3>
        <h1>THE CULTURE</h1>
        <p><i>Lovely people with nack for design creativity flourish here.</i></p>
        <img src="https://html.waituk.com/roxine/img/divider.png" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
      </div>
      <div className="carousels">
        <div className="arrows">
          <div className="leftArrow" >
            <MdOutlineKeyboardArrowLeft onClick={left} />
          </div>
          <div className="rightArrow">
            <MdKeyboardArrowRight onClick={right} />
          </div>
        </div>
        <div className="container pb-5 text-center">
          <h3>WHO WE ARE</h3>
          <h1>TEAM WORK</h1>
          <p>We really love what we do & our work on every project truly reflects that.</p>
          <img src="https://html.waituk.com/roxine/img/divider.png" alt="" />
          <div className="workCarousels">
            <div className="workCarousel" style={{ transform: `translateX(-${data *350}px)` }}>
              <div className="workItem">
                <img src="https://html.waituk.com/roxine/img/team-02.jpg" alt="" />
                <div className="workHover">
                  <h3>JASON STRATHAM</h3>
                  <p>UI/UX GURU</p>
                </div>
              </div>
              <div className="workItem">
                <img src="https://html.waituk.com/roxine/img/team-01.jpg" alt="" />
                <div className="workHover">
                  <h3>JESSICA FIZOVIC</h3>
                  <p>UI/UX GURU</p>
                </div>
              </div>
              <div className="workItem">
                <img src="https://html.waituk.com/roxine/img/team-03.jpg" alt="" />
                <div className="workHover">
                  <h3>JAMES NASS</h3>
                  <p>UI/UX GURU</p>
                </div>
              </div>
              <div className="workItem">
                <img src="https://html.waituk.com/roxine/img/team-02.jpg" alt="" />
                <div className="workHover">
                  <h3>STEVE MANNING</h3>
                  <p>UI/UX GURU</p>
                </div>
              </div>
              <div className="workItem">
                <img src="https://html.waituk.com/roxine/img/team-01.jpg" alt="" />
                <div className="workHover">
                  <h3>JESSICA FIZOVIC</h3>
                  <p>UI/UX GURU</p>
                </div>
              </div>
            </div>
          </div>
          <p className='worksP' >Martin loves gossiping code on his iPhone. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  )
}

export default Works