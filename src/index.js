import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Update the form state to Redux store based on Redux actions
const appReducer = combineReducers({ form: formReducer });
// Create store to store the states
const store = createStore(appReducer);
// Makes the Redux store to child components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
