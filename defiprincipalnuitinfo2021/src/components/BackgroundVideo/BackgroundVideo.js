import "./BackgroundVideo.css";

const BackgroundVideo = (props) => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
