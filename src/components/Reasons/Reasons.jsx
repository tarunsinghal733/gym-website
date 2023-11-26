import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"


const Reasons = () => {
    return (
        <div className="reason" id='reason'>
            <div className="l-reason">
                <img className='image1' src={image1} alt="image1" />
                <img className='image2' src={image2} alt="image2" />
                <img className='image3' src={image3} alt="image3" />
                <img className='image4' src={image4} alt="image4" />
            </div>

            <div className="r-reason">
                <span>Some Reasons</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> Choose Us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt=""></img>
                        <span className='text-uppercaser'>Over 140+ EXpert coaches</span>
                    </div>
                    <div>
                        <img src={tick} alt="" ></img>
                        <span className='text-uppercaser'>train smarter and faster than before</span>
                    </div>
                    <div>

                        <img src={tick} alt="" ></img>
                        <span className='text-uppercaser'>free program for new memeber</span>
                    </div>
                    <div>
                        <img src={tick} alt="" ></img>
                        <span className='text-uppercaser'>reliable partner</span>
                    </div>
                </div>
                <span className='partner-text'>OUR PARTNERS</span>
                <div className="partner">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons