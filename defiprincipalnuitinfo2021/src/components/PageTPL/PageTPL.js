import React, { Component } from "react";
import ReactDom from "react-dom";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";

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

      </div>
    );
  }
}

export default PageTPL;
