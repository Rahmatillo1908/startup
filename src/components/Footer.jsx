import React from 'react'
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiLogoFacebook ,BiLogoTwitter ,BiBasketball } from "react-icons/bi";
import { TfiGoogle ,TfiPinterestAlt } from "react-icons/tfi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

function Footer() {
    const image = [

        {
            id: 1,
            img: "https://html.waituk.com/roxine/img/logo-01.png"
        },
        {
            id: 2,
            img: "https://html.waituk.com/roxine/img/logo-03.png"
        },
        {
            id: 3,
            img: "https://html.waituk.com/roxine/img/logo-04.png"
        },
        {
            id: 4,
            img: "https://html.waituk.com/roxine/img/logo-02.png"
        },
        {
            id: 5,
            img: "https://html.waituk.com/roxine/img/logo-03.png"
        },
        {
            id: 6,
            img: "https://html.waituk.com/roxine/img/logo-05.png"
        },
        {
            id: 7,
            img: "https://html.waituk.com/roxine/img/logo-01.png"
        },
        {
            id: 8,
            img: "https://html.waituk.com/roxine/img/logo-03.png"
        },
        {
            id: 9,
            img: "https://html.waituk.com/roxine/img/logo-04.png"
        },
        {
            id: 10,
            img: "https://html.waituk.com/roxine/img/logo-02.png"
        },
        {
            id: 11,
            img: "https://html.waituk.com/roxine/img/logo-03.png"
        },
        {
            id: 12,
            img: "https://html.waituk.com/roxine/img/logo-05.png"
        },
    ]
    return (
        <div>
            <div className="footerCarousel">
                <div className="container">
                    <div className="footerDisplay">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={10}
                            autoplay={{
                                delay: 4500,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            className="mySwiper"
                            modules={[Autoplay, Navigation]}
                        >
                            {image.map((item, index) => {
                                return (
                                    <SwiperSlide className="footerImage" key={index}>
                                        <img src={item.img} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <img src="https://html.waituk.com/roxine/img/logo-dark.svg" alt="" />
                    <div className="footerMenu">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="icon">
                        <BiLogoFacebook/>
                        <BiLogoTwitter/>
                        <TfiGoogle/>
                        <TfiPinterestAlt/>
                        <BiBasketball/>
                    </div>
                </div>
                <p>Copyright 2016 - Roxine - Multi Purpose Theme by Waituk</p>
            </div>
        </div>
    )
}
   
export default Footer