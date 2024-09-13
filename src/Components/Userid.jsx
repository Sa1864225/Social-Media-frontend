import React from 'react'
import "../Styles/Userid.css"
import dp from '../Images/DP.jpg'

export const Userid = () => {
  return (
    <div className='Userid'>
        <div className='first'>
        <div className="img">
            <img src={dp} alt="dp" />
        </div>
        <div className="info">
            <h3>Userid</h3>
            <p>username</p>
        </div>
        </div>
        <div>
            <button>Follow</button>
        </div>
    </div>
  )
}
