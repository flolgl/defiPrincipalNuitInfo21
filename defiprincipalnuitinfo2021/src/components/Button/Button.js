import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className="btn btn-border-5">{props.children}</button>
    </div>
  );
};

export default Button;