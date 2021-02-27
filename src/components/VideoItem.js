import React from 'react'
import './VideoItem.css'

const VideoItem = ({videos, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(videos)} className="video-item item">
            <img className="ui image" alt={videos.snippet.title} src={videos.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{videos.snippet.title}</div>
            </div> 
        </div>
    )
}
export default VideoItem