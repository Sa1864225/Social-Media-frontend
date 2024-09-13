import React from 'react'
import dp from '../Images/DP.jpg'
import '../Styles/Suggestion.css'
import { Userid } from './Userid'

export const Suggestion = () => {
  return (
    <div className='suggestion' >
      <Userid></Userid>
      <div className="heading">
        <h2>Suggested for you</h2>
        <button >See All</button>
      </div>
      <Userid></Userid>
      <Userid></Userid>
      <Userid></Userid>
      <Userid></Userid>
      <Userid></Userid>
      <Userid></Userid>
    </div>
  )
}
