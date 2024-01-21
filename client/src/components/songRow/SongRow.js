import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import styles from "../songRow/songRow.css"

const SongRow = ({songName,artist,isPlaying,handleIsPlaying,id}) => {

  return (
    <div className='songRow'>
        <span className='play-btn' onClick={() => handleIsPlaying(id)}>
        {
            isPlaying?
            <FaPause />
            :
            <FaPlay />
        }
        </span>
        {' '}
        <strong>{songName}</strong>
        {' by '}
        <span>{artist}</span>
    </div>
  )
}

export default SongRow;
