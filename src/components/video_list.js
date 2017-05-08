import React, { Component } from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const { videos } = props
  return (
    <ul className="col-md-4 list-group">
      {videos.map((video, index) => <VideoListItem key={index} {...videos}/>)}
    </ul>
  )
}

export default VideoList