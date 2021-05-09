import "./VideoBackground.scss";

const VideoBackground = () => {
  return (
    <div className="html-video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        // ref="video"
        className="videoplayer"
        id="video"
        controlsList="nodownload"
        poster="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1610816567/img/video-placeholder.png"
      >
        <source
          type="video/mp4"
          src="https://res.cloudinary.com/cloudinary-ls-images/video/upload/q_auto:eco/v1610808503/img/Sunset-hb-vimeo-2k-web.mp4"
        />
      </video>
      {/* <div className="mask"></div> */}
    </div>
  );
};

export default VideoBackground;
