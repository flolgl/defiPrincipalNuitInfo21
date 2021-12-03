import video from "./video.mp4";
import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
