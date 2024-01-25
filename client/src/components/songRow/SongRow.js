import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import  "./songRow.css"

const SongRow = ({songName,artist,isPlaying,handleIsPlaying,id,img}) => {

  return (
    <li className={'songRow'}>

          {img? <img className='image' src={img}/> : null}       

  <div className={isPlaying?' text-utils-active':'text-utils '}>
  <span className='play-button' onClick={() => handleIsPlaying(id)}> 
        {
            isPlaying?
            <FaPause />
            :
            <FaPlay />
        }
        
        </span>
        
        <strong>{songName}</strong>
        {' '}
        <span>{artist}</span>
        </div>
    </li>
  )
}

export default SongRow;
