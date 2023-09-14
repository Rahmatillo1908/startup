import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonial.css";
import {  EffectCoverflow} from "swiper/modules";

function Testimonial() {

    const array = [
        {
            id: 1,
            img: "https://html.waituk.com/roxine/img/people-01.jpg",
            name: "Natalie Fullick"
        },
        {
            id: 2,
            img: "https://html.waituk.com/roxine/img/people-02.jpg",
            name: "Jake Grahm"
        },
        {
            id: 3,
            img: "https://html.waituk.com/roxine/img/people-03.jpg",
            name: "Jason Doe"
        },
        {
            id: 4,
            img: "https://html.waituk.com/roxine/img/people-01.jpg",
            name: "Natalie Fullick"
        },
        {
            id: 5,
            img: "https://html.waituk.com/roxine/img/people-02.jpg",
            name: "Jake Grahm"
        },
        {
            id: 6,
            img: "https://html.waituk.com/roxine/img/people-03.jpg",
            name: "Jason Doe"
        },
        {
            id: 1,
            img: "https://html.waituk.com/roxine/img/people-01.jpg",
            name: "Natalie Fullick"
        },
        {
            id: 2,
            img: "https://html.waituk.com/roxine/img/people-02.jpg",
            name: "Jake Grahm"
        },
        {
            id: 3,
            img: "https://html.waituk.com/roxine/img/people-03.jpg",
            name: "Jason Doe"
        },
        {
            id: 4,
            img: "https://html.waituk.com/roxine/img/people-01.jpg",
            name: "Natalie Fullick"
        },
        {
            id: 5,
            img: "https://html.waituk.com/roxine/img/people-02.jpg",
            name: "Jake Grahm"
        },
        {
            id: 6,
            img: "https://html.waituk.com/roxine/img/people-03.jpg",
            name: "Jason Doe"
        },
    ]
    return (
        <section className="content-block text-secondary">
            <div className="container">
                <div className="block-heading bottom-space text-center">
                    <h3>HEAR FROM</h3>
                    <h2>TESTIMONIALS</h2>
                    <span className="block-sub-heading">We always listen to our clients.</span>
                    <div className="divider"><img src="https://html.waituk.com/roxine/img/divider.png" alt="images description" /></div>
                </div>
                <Swiper
                 grabCursor={true}
                 autoplay={true}
                 centeredSlides={true}
                 slidesPerView={'auto'}
                 loop={true}
                 coverflowEffect={{
                   slideShadows: true,
                 }}
                 pagination={true}
                 modules={[EffectCoverflow]}
                 classNameName="mySwiper"
                >
                        {array.map(item =>
                            <SwiperSlide  classNameName="swiper-slide">
                                <img src={item.img} alt="images description" />
                                <div className="testimonial-content">
                                    <h3 className="testimonial-name text-info">{item.name}</h3>
                                    <h5>CEO - ENVATO INC.</h5>
                                    <p className="testimonial-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam reiciendis distinctio iure hic animi.
                                    </p>
                                </div>
                            </SwiperSlide>
                        )}
                </Swiper>
            </div>
        </section>
    )
}
export default Testimonial