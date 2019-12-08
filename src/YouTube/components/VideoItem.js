// import css from Video Item - custom css
import './VideoItem.css'
import React from 'react';


const VideoItem = ({video, onVideoSelect}) => { 
    // video.snippet.title is what we are calling from api
    // in the video item
    return (
        // onclick is passed the video arguement
        <div onClick={() => onVideoSelect(video)}className="video-item item">
            <img alt={video.snippet.title}
             className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
           <div className="header">{video.snippet.title} </div>
        </div>
    </div>
    ); 
};

export default VideoItem;
