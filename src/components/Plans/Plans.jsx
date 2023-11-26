import React from 'react'
import { plansData } from "../../data/plansData"
import whitetick from "../../assets/whiteTick.png"
import "../../index.css"
import "./Plans.css"

const Plans = () => {
    return (
        <div className='plans-cont'>
            <div className='plans-header' style={{ gap: "1rem" }}>
                <span className='stroke-text'>
                    Ready to start
                </span>

                <span>
                    your journey
                </span>

                <span className='stroke-text'>
                    now withus
                </span>
            </div>

            <div className='plans'>
                {plansData.map((plan, i) => (
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className='feature'>
                            {plan.features.map((feature, i) => (
                                <div className="feature-content">
                                    <img className='feature-img' src={whitetick}></img>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className=''>
                            <span>See more benefits</span>
                            <button className='btn-plan'>Join now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans