import React from 'react'
import "./Hero.css"
import Navbar from "../Navbar/Navbar.jsx"

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
                    </div>
                    {/* hero-heading */}
                </div>
                <div className='hero-r'>
                    R
                </div>
            </div>
        </div>
    )
}

export default Hero