import React from 'react'
import "./Join.css"

const Join = () => {
    return (
        <div className="join" id='join'>
            <div className="join-l">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="join-r">
                <form action="" className="email-cont">
                    <input type="email" name='user_email' placeholder='enter you email to join' />
                    <button className='btn-j'>Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join