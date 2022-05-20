import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import './index.css';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
);


// ReactDOM.render(
//   <Auth0ProviderWithHistory
//     domain="dev-srivwqrf.us.auth0.com"
//     clientId="tc4jJuAkNY2WzDkZuw87gY46j0He3azq"
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0ProviderWithHistory>,
//   document.getElementById("root")
// );