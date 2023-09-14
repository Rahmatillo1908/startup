import React, { useEffect, useState } from 'react'
import "./style.css"
import { AiFillHeart, AiOutlineLink } from "react-icons/ai"
function Portfolio() {
  const arrays = [
    {
      id: 1,
      image: "https://html.waituk.com/roxine/img/img-37.jpg",
      category: ["ALL", "UI/UX DESIGN", "PHOTOGRAPHY"],
    },
    {
      id: 2,
      image: "https://html.waituk.com/roxine/img/img-32.jpg",
      category: [ "PROGRAMMING","ALL","PHOTOGRAPHY"],
    },
    {
      id: 3,
      image: "https://html.waituk.com/roxine/img/img-33.jpg",
      category: ["ALL","UI/UX DESIGN","PHOTOGRAPHY"],
    },
    {
      id: 4,
      image: "https://html.waituk.com/roxine/img/img-34.jpg",
      category: ["ALL","PROGRAMMING","ECOMMERCE"],
    },
    {
      id: 5,
      image: "https://html.waituk.com/roxine/img/img-35.jpg",
      category: ["ALL","PROGRAMMING","ECOMMERCE"],
    },
    {
      id: 6,
      image: "https://html.waituk.com/roxine/img/img-36.jpg",
      category: ["ALL","","ECOMMERCE","UI/UX DESIGN"],
    },
  ]
  const [categorys, setCategory] = useState("ALL")
  const [data, setData] = useState(arrays)
  useEffect(() => {
    if (categorys === "ALL") {
      setData(arrays)
    } else {
      const filterArray = arrays.filter(item=>item.category.includes(categorys))
      setData(filterArray)
    }
  
    
  },)
  
  
  
  return (
    <>
      <div className='port' >
        <h1>BEST EVER DESIGN</h1>
        <h2>Time to enhance your web presence!</h2>
        <button className='button'>Get quotation</button>
      </div>

      <div className="work">
        <div className="workText">
          <h1>THE WORK</h1>
          <div className="workLi">
            <button onClick={()=>setCategory("ALL")}>ALL</button>
            <button onClick={()=>setCategory("UI/UX DESIGN")}>UI/UX DESIGN</button>
            <button onClick={()=>setCategory("PROGRAMMING")}>PROGRAMMING</button>
            <button onClick={()=>setCategory("PHOTOGRAPHY")}>PHOTOGRAPHY</button>
            <button onClick={()=>setCategory("ECOMMERCE")}>ECOMMERCE</button>
          </div>
        </div>
        <div className="workCards">
          {
            data.map(item =>
              <div className="workCard" key={item.id}>
                <div className="workWhiteHover"></div>
                <img src={item.image} alt="" />
                <div className="workHovers">
                  <i>
                    <AiFillHeart />
                  </i>
                  <i>
                    <AiOutlineLink />
                  </i>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
export default Portfolio