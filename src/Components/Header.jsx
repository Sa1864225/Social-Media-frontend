import React from 'react'
import '../Styles/Header.css'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { BiMessageSquareDots } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


export const Header = () => {
  return (
    <div className='Header'>
        <nav>
            <h2><a href="#">Instagram</a></h2>
            <ul>
                <li><a href="#"><FaHome style={{marginRight:"10px",fontSize:"1.5rem" }}/>Home</a></li>
                <li><a href="#"><FaSearch style={{marginRight:"10px",fontSize:"1.5rem" }} />Search</a></li>
                <li><a href="#"><MdExplore style={{marginRight:"10px",fontSize:"1.5rem" }}/>Explore</a></li>
                <li><a href="#"><TbMovie style={{marginRight:"10px",fontSize:"1.5rem" }}/>Reels</a></li>
                <li><a href="#"><BiMessageSquareDots style={{marginRight:"10px",fontSize:"1.5rem" }}/>Messages</a></li>
                <li><a href="#"><IoNotifications style={{marginRight:"10px",fontSize:"1.5rem" }}/>Notification</a></li>
                <li><a href="#"><IoCreate style={{marginRight:"10px",fontSize:"1.5rem" }}/>Create</a></li>
                <li><a href="#"><CgProfile style={{marginRight:"10px",fontSize:"1.5rem" }}/>Profile</a></li>
            </ul>
        </nav>
    </div>
  )
}
