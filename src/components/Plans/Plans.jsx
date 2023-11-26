import React from 'react'
import { plansData } from "../../data/plansData"
import whitetick from "../../assets/whiteTick.png"
import "./Plans.css"

const Plans = () => {
    return (
        <div className='plans'>
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

            <div className='plan-card'>
                {plansData.map((plan, i) => (
                     <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className='features'>
                            {plan.features.map((feature, i) => (
                                <div className="features">
                                    <img src={whitetick}></img>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className=''>
                            <span>See more benefits</span>
                            <button className='btn-join'>Join now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans