import React from 'react';
import ReactDOM from 'react-dom/client';
import 'nes.css/css/nes.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { store, persistor } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider loading={null} store={ store }>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
        </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
  
);

serviceWorkerRegistration.register();
