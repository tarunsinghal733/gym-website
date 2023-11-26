import React, { useState } from 'react'
import "./Testimonials.css"
import leftarrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import { testimonialsData } from "../../data/testimonialsData"

const Testimonials = () => {
    const [selected, setselected] = useState(0)
    const tLength = testimonialsData.length
    return (
        <div className='testimonials'>
            <div className="test-l">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span className='test-head'>say about us</span>
                <span className='test-review'>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="test-r">
                <div className='outline-img'></div>
                <div className='filled-img'></div>
                <img src={testimonialsData[selected].image}></img>
                <div className='arrows'>
                    <img onClick={() => {
                        selected === 0 ? setselected(tLength - 1)
                        : setselected((prev) => prev - 1);
                    }} src={leftarrow} alt="" />
                    <img onClick={() => {
                        selected === tLength - 1 ? setselected(0)
                        : setselected((prev) => prev + 1);
                    }} src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials