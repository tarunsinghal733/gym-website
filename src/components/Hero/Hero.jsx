import React from 'react'
import "./Hero.css"
import Navbar from "../Navbar/Navbar.jsx"
import heroimage from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"



const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <div className='hero-l'>
                    <Navbar />
                    {/* the-best-ad */}
                    <div className='the-best-ad'>
                        <div></div>
                        <span>
                            The best fitness club in the town
                        </span>
                    </div>
                    {/* the-best-ad */}


                    {/* hero-heading */}
                    <div className='hero-text'>
                        <div>
                            <span className="stroke-text">Shape </span>
                            <span>You</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div className='herotext-p'>
                            <span>in here we will help you to shape and build your ideal body and live up your life to fullest </span>
                        </div>
                    </div>
                    {/* hero-heading */}

                    {/* figures */}
                    <div className='figures'>

                        <div>
                            <span className='figures-i'>
                                + 140
                            </span>
                            <span className='figures-p'>
                                EXPERT COACHES
                            </span>
                        </div>

                        <div>
                            <span className='figures-i'>
                                + 978
                            </span>
                            <span className='figures-p'>
                                MEMBERS JOINED
                            </span>
                        </div>

                        <div>
                            <span className='figures-i'>
                                +  89
                            </span>
                            <span className='figures-p'>
                                FITNESS PROGRAMS
                            </span>
                        </div>

                    </div>
                    {/* figures */}

                    {/* hero button */}
                    <div className='hero-btn'>
                        <button className='btn1'>Get Started</button>
                        <button className='btn2'>Learn More</button>
                    </div>
                    {/* hero button */}

                </div>
                <div className='hero-r'>
                    <button className='btn1 bnt-heart'>Join Now</button>
                    <div className='heart-rate'>
                        <img src={heart}></img>
                        <span className='rate-p'>
                            Heart Rate
                        </span>
                        <span className='rate-count'>
                            116 bpm
                        </span>
                    </div>
                    <img src={heroimage} className='heroimage'></img>
                    <img src={hero_image_back} className='hero_image_back'></img>
                    <div className='calories'>
                        <img src={calories}></img>
                        <div>
                            <span className='calories-p'>
                                Calories Burned
                            </span>
                            <span className='calories-count'>
                                220Kcal
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero