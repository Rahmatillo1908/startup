import React from 'react'
import { GiGlassCelebration , GiSharpSmile } from "react-icons/gi";
import { BsDoorOpen ,BsAward } from "react-icons/bs";
import "./style.css"
function About() {
  const array = [
    {
      id: 1,
      icon: <BsDoorOpen/>,
      number: 505,
      name: "TOTAL PROJECTS"
    },
    {
      id: 2,
      icon: <GiSharpSmile/>,
      number: 220,
      name: "SATISFIED CLIENTS"
    },
    {
      id: 3,
      icon: <BsAward/>,
      number: 720,
      name: "AWARDS WON"
    },
    {
      id: 4,
      icon: <GiGlassCelebration/>,
      number: 707,
      name: "MILESTONES MET"
    },
  ]
  return (
    <div className='about'>
      <div className="aboutCards">
        {array.map(item =>
          <div key={item.id} className="aboutCard">
            <div className="aboutIcon">
              {item.icon}
            </div>
            <div className="number">
              <h3>{item.number}</h3>
              <p>{item.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default About