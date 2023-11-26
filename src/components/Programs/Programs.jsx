import React from 'react'
import "./Programs.css"
import Rightarrow from "../../assets/rightArrow.png"
import { programsData } from "../../data/programsData"

const Programs = () => {
    return (
        <div className='program' id='programs'>
            <div className='programs-header'>
                <span className='stroke-text'>
                    Explore our
                </span>

                <span>
                    programs
                </span>

                <span className='stroke-text'>
                    to shape you
                </span>
            </div>

            <div className="program-data">
                {programsData.map((program,id) => (
                    <div className="category" key={id}>
                       <div className='img'>
                       {program.icon}
                       </div>
                        <span>
                            {program.heading}
                        </span>

                        <span>
                            {program.details}
                        </span>
                        <div className='join-now'>
                            <span>
                                Join Now
                            </span>
                            <img src={Rightarrow}></img>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Programs