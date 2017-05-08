import React from 'react'

const VideoListItem = (props) => { 
  const { video } = props
  return (
    <li>{video.title}</li>
  )
}

export default VideoListItem