import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { FirebaseAppProvider } from 'reactfire'

import firebaseConfig from './firebase/firebaseConfig'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} >
        <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
