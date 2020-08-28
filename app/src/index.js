import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk' 
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {animalsReducer} from './reducers';

const logger = ({ getState }) => next => action => {
    console.log("Dispatching:", action);
    next(action);
  };

const store = createStore(animalsReducer, applyMiddleware(logger,ReduxThunk));
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>, rootElement)
