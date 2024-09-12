import React from 'react'
import '../Styles/PersonStory.css'
import dp from '../Images/DP.jpg'

export const PersonStory = () => {
  return (
    <div className='PersonStory'>
        <img src={dp} alt="dp" />
        <h4>Username</h4>
    </div>
  )
}
