import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Shell from "./Shell";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Shell,
});

export const { bootstrap, mount, unmount } = lifecycles;
