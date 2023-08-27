import "./styles/HomeVideo.css";
import video from "../assets/Home_video.mp4";

const HomeVideo = () => {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="video-text">
        <h1>Your Personal Gift Advisor</h1>
      </div>
    </>
  );
};

export default HomeVideo;
