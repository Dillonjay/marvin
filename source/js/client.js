import 'babel-polyfill';
import 'isomorphic-fetch';

// Load Locales. English and Spanish.
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from 'config/store';
import App from 'views/App';

// Load CSS
import 'index.css';

import messages from './messages';
import flattenMessages from './utils/flattenMessages';

const store = configureStore().store;

// When used with server dehydrated state "ReactDOM.hydrate" should be called
const renderMethod = process.env.HYDRATE ? ReactDOM.hydrate : ReactDOM.render;

// Register locale data with react-intl
addLocaleData([...en, ...es]);

// Grab prefered locale from the browser. Default to english.
const locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage // IE.
  || 'en';

// Pass IntlProvider the current local ('en' for English, 'es' for Spanish, 'es-MX' for Mexican Spanish etc.. ).
// Also pass in ALL translated messages in the app.
renderMethod(
  <AppContainer>
    <Provider store={ store }>
      <IntlProvider locale={ locale } messages={ flattenMessages(messages[locale]) }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
