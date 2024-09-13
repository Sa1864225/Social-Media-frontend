import React from 'react';
import '../Styles/Post.css';
import post from '../Images/20230529_111318.jpg'
import dp from '../Images/DP.jpg'
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";


const Post = () => {
  return (
    <center><div className="Post">
      <div  className='posthead'>
        <div className="userinfo">
          <img src={dp} alt="dp" />
          <h4>Username</h4>
        </div>
        <div>
          <BsThreeDots style={{fontSize:'1.4rem', padding:'10px'}}/>
        </div>
      </div>
      <div className="post">
        <img src={post} alt="post" />
      </div>
      <div className="stats">
        <div className='like-comment'>
          <div><FaRegHeart style={{fontSize:'1.4rem', padding:'10px'}}/></div>
          <div><FaRegComment style={{fontSize:'1.4rem', padding:'10px'}}/></div>
          <div><RiShareForwardLine style={{fontSize:'1.4rem', padding:'10px'}}/></div>
        </div>
        <div>
          <FaRegBookmark style={{fontSize:'1.4rem', padding:'10px'}}/>
        </div>
      </div>
    </div></center>
  );
}

export default Post;
