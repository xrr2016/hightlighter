import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const { id, snippet } = video
  const url = `https://www.youtube.com/embed/${id.videoId}`
  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-reponsive-16by9'>
        <video src={url} autoPlay controls
          poster={snippet.thumbnails.medium.url} />
      </div>
      <div className='details'>
        <p>{snippet.title}</p>
        <p>{snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
