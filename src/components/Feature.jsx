import React from 'react'
import "./style.css"
import { GiExpense } from "react-icons/gi";
import { TfiVector ,TfiViewList} from "react-icons/tfi";
import { BiFontSize ,BiLayer } from "react-icons/bi";
function Feature() {
  return (
    <div className='feature' >
        <div className="featureCards">
            <div className="featureCard1">
                <h1>WHAT WE DO <b>EXPERTS</b> </h1>
                <p>We build digital solutions.</p>
                <img src="https://html.waituk.com/roxine/img/divider.png" alt="" />
            </div>
            <div className="featureCard">
              <i>
              <GiExpense size={50} />
              </i>
                <h1>PIXEL PERFECT</h1>
                <p>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet</p>
                <a href="">LEARN MORE</a>
            </div>
            <div className="featureCard">
              <i>
              <TfiVector size={50}/>
              </i>
                <h1>VECTOR SHAPES</h1>
                <p>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet</p>
                <a href="">LEARN MORE</a>
            </div>
            <div className="featureCard">
              <i>
              <BiFontSize size={50}/>
              </i>
                <h1>GOOGLE FONTS</h1>
                <p>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet</p>
                <a href="">LEARN MORE</a>
            </div>
            <div className="featureCard">
              <i>
              <BiLayer size={50}/>
              </i>
                <h1>EASY LAYERS</h1>
                <p>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet</p>
                <a href="">LEARN MORE</a>
            </div>
            <div className="featureCard">
              <i>
              <TfiViewList size={50}/>
              </i>
                <h1>BOOTSTRAP GRID</h1>
                <p>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet</p>
                <a href="">LEARN MORE</a>
            </div>
        </div>
    </div>
  )
}

export default Feature