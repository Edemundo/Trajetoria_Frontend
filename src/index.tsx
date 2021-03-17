import React from 'react';
import ReactDOM from 'react-dom';
import { InfoRequestProvider } from './providers/infoRequest';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <InfoRequestProvider>
      <App />
    </InfoRequestProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
