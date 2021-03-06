import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("./firebase-messaging-sw.js")
//       .then(function(registration) {
//         console.log("Registration successful, scope is:", registration.scope);
//       })
//       .catch(function(err) {
//         console.log("Service worker registration failed, error:", err);
//       });
//   }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
