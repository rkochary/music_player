import React, { useState } from 'react'
import data from '../../data.json'
import SongRow from '../songRow/SongRow';
import PlayingSong from '../playingSong/PlayingSong';
import "./SongList.css"

const SongList = () => {

    const [songList,setSongList] = useState(data)
    const [playingAll,setPlayingAll] = useState(false)

    const playingSong = songList.find(song => song.isPlaying);


    const handleIsPlaying = (id) => {
      const updatedSongs = songList.map((song) =>
      song.trackNumber === id ? { ...song, isPlaying: !song.isPlaying } : { ...song, isPlaying: false }
      );
      setSongList(updatedSongs); 
    }

    const handleActivetedPlayingAll = () => {
      console.log(playingAll);
      setPlayingAll(!playingAll)
    }

    const handlePlayNextSong = () => {
      if (!playingSong) {
        const firstSong = songList[0];
        if(firstSong){
          handleIsPlaying(firstSong.trackNumber);
        }
        return;
      }
      const currentIndex = songList.findIndex((song) => song.trackNumber === playingSong.trackNumber);
      const nextIndex = (currentIndex + 1) % songList.length;
      handleIsPlaying(songList[nextIndex].trackNumber);
    }

    const handlePlayPrevSong = () => {
      if (!playingSong) {
        const lastSong = songList[songList.length - 1];
        if(lastSong){
          handleIsPlaying(lastSong.trackNumber);
        }
        return;
      }
      const currentIndex = songList.findIndex((song) => song.trackNumber === playingSong.trackNumber);
      const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
      handleIsPlaying(songList[prevIndex].trackNumber);
    };



  return (
    <div className='songList'>
        <ul className='list'>
        {songList.map((song) => 
             <SongRow img={song.img} key={song.trackNumber} id={song.trackNumber} handleIsPlaying={handleIsPlaying}  songName={song.songName} isPlaying={song.isPlaying} artist={song.artistName} i={song.trackNumber}/>
        )}
        </ul>
        <footer>
        {playingSong ?
         <PlayingSong
           song={playingSong}
           playingAll={playingAll}
           handleActivetedPlayingAll={handleActivetedPlayingAll} 
           handlePlayNextSong={handlePlayNextSong} 
           handlePlayPrevSong={handlePlayPrevSong} 
           handleIsPlaying={handleIsPlaying} 
           /> :
         <PlayingSong
           song={songList[0]} 
           playingAll={playingAll} 
           handleActivetedPlayingAll={handleActivetedPlayingAll}
           handlePlayNextSong={handlePlayNextSong} 
           handlePlayPrevSong={handlePlayPrevSong} 
           handleIsPlaying={handleIsPlaying}/> }
        </footer>
        
    </div>
  )
}

export default SongList;
