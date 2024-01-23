import React, { useState } from 'react'
import { IoPlayBackSharp } from "react-icons/io5";
import { IoPlayForwardSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import "./PlayingSong.css"

const PlayingSong = ({song,handleIsPlaying,handlePlayNextSong,handlePlayPrevSong}) => {



  return (
<div className='playingSong-container'>
    <div className='playingSong'>
      <div className='back-btn'>
      <IoPlayBackSharp onClick={() => handlePlayPrevSong()} />
      </div>
      <div className='play-btn' onClick={() => handleIsPlaying(song.trackNumber)}>
        {
          song?.isPlaying?
          <FaCirclePause />
           : <FaCirclePlay />
        }
      </div>
      <div className='frwrd-btn'>
      <IoPlayForwardSharp onClick={() => handlePlayNextSong()} />
      </div> 
    </div>
      <div className='songName'>
        <div>{song?.artistName}</div>
        <div>{song?.songName}</div>
        </div>     
</div>
  )
}

export default PlayingSong;
