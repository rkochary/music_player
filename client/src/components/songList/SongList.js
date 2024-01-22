import React, { useState } from 'react'
import data from '../../data.json'
import SongRow from '../songRow/SongRow';
import PlayingSong from '../playingSong/PlayingSong';
import styles from "../songList/SongList.css"

const SongList = () => {

    const [songList,setSongList] = useState(data)

    const playingSong = songList.find(song => song.isPlaying)


    const handleIsPlaying = (id) => {
        const updatedSongs = songList.map((song) =>
      song.trackNumber === id ? { ...song, isPlaying: !song.isPlaying } : { ...song, isPlaying: false }
    );

    setSongList(updatedSongs); 
    }


  return (
    <div className='songList'>
        <ul className='list'>
        {songList.map((song) => 
             <SongRow img={song.img} key={song.trackNumber} id={song.trackNumber} handleIsPlaying={handleIsPlaying} songName={song.songName} isPlaying={song.isPlaying} artist={song.artistName} i={song.trackNumber}/>
        )}
        </ul>
        {playingSong?<div><PlayingSong song={playingSong} />  </div> : null}
        
    </div>
  )
}

export default SongList;
