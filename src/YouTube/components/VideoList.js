import React from 'react';
import VideoItem from './VideoItem';

// callback from the app to the onVideoSelct
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect} video={video} />;

    });
    // props.videos
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;