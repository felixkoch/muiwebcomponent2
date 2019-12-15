import React from "react";
import ReactDOM from "react-dom";

import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';

import App from "./App";

const shadowRoot = document
  .getElementById("app")
  .attachShadow({ mode: "closed" });

const reactRoot = shadowRoot.appendChild(document.createElement("div"));

const jss = create({
  ...jssPreset(),
  insertionPoint: reactRoot
});

ReactDOM.render(
  <StylesProvider jss={jss}>
      <App />
  </StylesProvider>,
  reactRoot
);

module.hot.accept();
