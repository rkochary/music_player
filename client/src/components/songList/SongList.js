import React, { useState } from 'react'
import data from '../../data.json'
import SongRow from '../songRow/SongRow';
import PlayingSong from '../playingSong/PlayingSong';

const SongList = () => {

    const [songList,setSongList] = useState(data)
    //const [playingSong,setPlayingSong] = useState(null);

    const playingSong = songList.find(song => song.isPlaying)


    const handleIsPlaying = (id) => {
        const updatedSongs = songList.map((song) =>
      song.trackNumber === id ? { ...song, isPlaying: !song.isPlaying } : { ...song, isPlaying: false }
    );

    setSongList(updatedSongs); 
    }


    // const handleIsPlaying = (id) => {
        
    //     setSongList((prev) => prev.map((song) => {
    //         if(song.trackNumber === id){
    //             return {
    //                 ...song,
    //                     isPlaying:!song.isPlaying
    //             }
    //         } else {
    //             return song
    //         }
    //     }
    //     ))
    // }



    console.log(playingSong);

  return (
    <div>
        {songList.map((song) => 
             <SongRow key={song.trackNumber} id={song.trackNumber} handleIsPlaying={handleIsPlaying} songName={song.songName} isPlaying={song.isPlaying} artist={song.artistName} i={song.trackNumber}/>
        )}
        {playingSong?<div>{playingSong.songName}</div> : null}
        
        {/* <PlayingSong song={playingSong} /> */}
    </div>
  )
}

export default SongList;
