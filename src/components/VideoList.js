import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {

    const videoCall  = videos.map(videos => {
        return <VideoItem 
                    onVideoSelect={onVideoSelect} 
                    videos={videos} 
                    key={videos.id.videoId}
                />
    })

    return (
        <div className="ui relaxed divided list">
            {videoCall}
        </div>
    )
}

export default VideoList
