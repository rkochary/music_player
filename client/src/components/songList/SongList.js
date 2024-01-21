import React, { useState } from 'react'
import data from '../../data.json'
import SongRow from '../songRow/SongRow';
import PlayingSong from '../playingSong/PlayingSong';

const SongList = () => {

    const [songList,setSongList] = useState(data)
    const [playingSong,setPlayingSong] = useState(null);

    // const findPlayingSong = () => {
    //     setPlayingSong(songList.filter(song => song.isPlaying))
    // }



    const handleIsPlaying = (id) => {
        
        setSongList((prev) => prev.map((song) => {
            if(song.trackNumber === id){
                return {...song,
                        isPlaying:!song.isPlaying
                }
            } else {
                return song
            }
        }
        ))
    }



    console.log(songList);

  return (
    <div>
        {songList.map((song) => 
             <SongRow key={song.trackNumber} id={song.trackNumber} handleIsPlaying={handleIsPlaying} songName={song.songName} isPlaying={song.isPlaying} artist={song.artistName} i={song.trackNumber}/>
        )}
        {/* <PlayingSong song={playingSong} /> */}
    </div>
  )
}

export default SongList;
