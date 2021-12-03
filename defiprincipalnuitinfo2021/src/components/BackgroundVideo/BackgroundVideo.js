import video from "./video.mp4";

import "./BackgroundVideo.css";

const BackgroundVideo = () => {
  return (
    <div className="bg-video-wrap">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div class="overlay"></div>
      <h1 className="home_title"> SAUVETEURS DU DUNKERQUOIS </h1>
			<h3 className="home_subtitle1"> Bienvenue sur le site des sauveteurs du dunkerquois. </h3>
      <h3 className="home_subtitle2">  Ce site rend hommage aux femmes, hommes et enfants qui ont réalisé des actes de sauvetages en milieu aquatique.</h3>
    </div>
  );
};

export default BackgroundVideo;
