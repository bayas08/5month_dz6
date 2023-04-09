import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/reducer/reducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(logger, thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
