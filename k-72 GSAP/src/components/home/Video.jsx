import React from 'react'
import HomeVideo from "../../assets/video/HomeVideo.mp4";
const Video = () => {
  return (
    <div>
      <video  className='h-full w-full object cover' autoPlay loop muted src={HomeVideo} type="video/mp4"></video>
    </div>
  )
}

export default Video
