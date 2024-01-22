import React, { useState } from 'react'
import { IoPlayBackSharp } from "react-icons/io5";
import { IoPlayForwardSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import style from "../playingSong/PlayingSong.css"

const PlayingSong = ({song}) => {

  return (
<div className='playingSong-container'>
    <div className='playingSong'>
      <div className='back-btn'>
      <IoPlayBackSharp />
      </div>
      <div className='play-btn'>
      <FaCirclePlay />
      </div>
      <div className='frwrd-btn'>
      <IoPlayForwardSharp />
      </div> 
    </div>
      <div>{song.songName}</div>     
</div>
  )
}

export default PlayingSong;
