import React, { useState } from 'react'
import { IoPlayBackSharp } from "react-icons/io5";
import { IoPlayForwardSharp } from "react-icons/io5";
import { FaCirclePlay } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { MdOutlineRestartAlt } from "react-icons/md";
import "./PlayingSong.css"

const PlayingSong = ({song,handleIsPlaying,handlePlayNextSong,handlePlayPrevSong,handleActivetedPlayingAll,playingAll}) => {



  return (
<div className='playingSong-container'>

      <div className='back-btn'>
        <IoPlayBackSharp onClick={() => handlePlayPrevSong()} />
      </div>
      <div className='play-btn' >
        <div className={playingAll ? 'restart-btn-active' : 'restart-btn'}>
          <MdOutlineRestartAlt onClick={handleActivetedPlayingAll} />
        </div>
        {
          song?.isPlaying?
          <FaCirclePause onClick={() => handleIsPlaying(song.trackNumber)}/>
           : <FaCirclePlay onClick={() => handleIsPlaying(song.trackNumber)}/>
        }
      </div>
      <div className='frwrd-btn'>
        <IoPlayForwardSharp onClick={() => handlePlayNextSong()} />
      </div> 
      <div className='songName'>
        {song?.artistName}
        {' '}
        {song?.songName}
      </div>     

</div>
  )
}

export default PlayingSong;
