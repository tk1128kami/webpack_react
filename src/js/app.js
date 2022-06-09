import bar from './bar.js';

bar();

import React from "react";
import ReactDOM from "react-dom";

const APP = () => {
  return <h1>Hello React</h1>;
};

ReactDOM.render(<APP />, document.getElementById("app"));