const VideoBox = ({isVisible, offset}) => {

  return (
    <div className="main-video-wrapper" style={{display: isVisible ? 'none' : '' }}>
      <div className="main-video" style={{ transform: `scale(${1 + offset / 400})`, opacity: `${1 - offset / 300}` }}>
        <video className="video" muted loop autoPlay>
          <source src="./videos/main-page-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideoBox