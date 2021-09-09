// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import configureStore from './store';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(
//   <Provider store={configureStore()}>
//     <AppRouter />
//   </Provider>,
//   document.getElementById('root')
// );
// registerServiceWorker();




import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./approuter";
// import * as serviceWorker from './client/serviceWorker';



// boostrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/jquery/dist/jquery.min.js';

//fontawesome
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "react-image-lightbox/style.css";
import "react-datepicker/dist/react-datepicker.css";

//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

if (
  !window.location.pathname.includes("admin") ||
  !window.location.pathname.includes("pharmacyadmin")
) {
  require("./client/assets/css/all.css");
  require("./client/assets/css/all.min.css");
  require("./client/assets/css/fontawesome.min.css");
  require("./client/assets/css/style.css");
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));



if (module.hot) {
  // enables hot module replacement if plugin is installed
  module.hot.accept();
}


