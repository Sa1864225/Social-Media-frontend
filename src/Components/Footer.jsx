import React from 'react'
import { PiCopyright } from "react-icons/pi";
import '../Styles/Footer.css'


export const Footer = () => {
  return (
    <div className='Footer'>
      <a href="#">About</a>
      <a href="#">.Help</a>
      <a href="#">.Privacy</a>
      <a href="#">.Terms</a>
      <a href="#">.Locations</a>
      <a href="#">.Language</a>
      <br />
      <br />
      <h5><PiCopyright />Copyright 2024 Instagram</h5>
    </div>
  )
}