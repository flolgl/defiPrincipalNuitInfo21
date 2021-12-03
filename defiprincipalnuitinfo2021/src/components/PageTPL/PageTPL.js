import React, { Component } from "react";
import ReactDom from "react-dom";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import SupportIcon from "@mui/icons-material/Support";

import "./PageTPL.css";

class PageTPL extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      dataLoaded: false,
    };
  }

  componentDidMount() {
    fetch(this.props.urlFetch)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
          dataLoaded: true,
        });
      });
  }

  render() {
    return (
      <div>
        <BackgroundVideo />
        <div className="section1">
          <div className="grid_section1">
            <img
              className="img_size"
              src="https://cdn-icons-png.flaticon.com/512/342/342381.png"
            />
            <div className="section_text">
              Ces sauveteurs, habitants du dunkerquois (de Bray-Dunes à
              Grand-Fort-Philippe), ont participé à plus de 900 sauvetages en
              mer et plus de 1100 sauvetages individuels.
            </div>
          </div>
          <div className="grid_section1">
            <img
              className="img_size"
              src="http://assets.stickpng.com/thumbs/5b06c233fad1cae04539afe3.png"
            />
            <div className="section_text">
              "Les sauvetages? Mais tout le monde en fait … Si un homme tombe
              dans la « Baille » est ce qu’on ne va pas le chercher? Il n’y a à
              cela aucun mérite…" - Arsène Bossu
            </div>
          </div>
          <div className="grid_section1">
            <img
              className="img_size"
              src="https://images.vexels.com/media/users/3/130014/isolated/preview/3a93b4202dc70070d1d6a87f656bb267-danger-sign.png
              "
            />
            <div className="section_text">
              La présence de bancs de sable a toujours rendu la navigation
              périlleuse au large du dunkerquois.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTPL;
