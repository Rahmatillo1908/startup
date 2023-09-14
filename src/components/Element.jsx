import React from 'react'
import "./style.css"
function Element() {
  return (
    <div className='element' >
        <div className="elementHead">
          <h2>THE LIFE SIZE</h2>  
          <h1>BRAND STORY</h1>
          <p>View multiple content block layouts under features section.</p>
          <img src="https://html.waituk.com/roxine/img/divider.png" alt="" />
        </div>
        <div className="elementText">
          <div className="elemetLeft">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaal qua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culp a qui officia deserunt mollit anim id est laborum. Sed ut per spiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ip</p>
           <button>VIEW PROJECTS</button>
          </div>
          <div className="elementRight">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="elementLi">
              <ul>
                <li>WEB & INTERACTIVE DESIGN</li>
                <li>CONTENT MANAGEMENT</li>
                <li>WEB APPLICATIONS</li>
                <li>SOFTWARE DEVELOPMENT</li>
                <li>ECOMMERCE SOLUTIONS</li>
              </ul>
              <ul>
                <li>DATABASE DESIGN</li>
                <li>TECHNICAL DOCUMENTATION</li>
                <li>SOFTWARE ARCHITECTURE</li>
                <li>SEARCH OPTIMIZATION</li>
                <li>WEB PROMOTIONS</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Element