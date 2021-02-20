import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './components/Card';
import CardList from './components/CardList'
import 'tachyons';/*
import {robots} from './robots'*/
import App from './App';
import './containers/App.css'

ReactDOM.render(
  <React.StrictMode>
  		<App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
