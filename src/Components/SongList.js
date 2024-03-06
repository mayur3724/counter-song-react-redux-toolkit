import React from "react";
import songsData from "../data/songData";
import { useDispatch, useDispatch } from "react-redux";
import { selectedSong } from "../redux/feautres/song/songSlice";

const SongList = ()=>{

    const dispatch = useDispatch();

    return(
        <div>
            <ul>
                {
                    songsData.map((song)=>{
                        <li 
                        onClick={()=>dispatch(selectedSong(song))}
                        key={song.id}>
                            <h1>
                                {song.name}
                            </h1>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default SongList;