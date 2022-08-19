import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.render(
  <Auth0Provider
  domain="tws.au.auth0.com"
  clientId="8tYWJMRaViJVufZRDO7bRyAISKRRQ2BW"
  redirectUri="https://stanleyawang.github.io/tws"
>
  <App /> 
  </Auth0Provider>,
  document.getElementById("root")
);
