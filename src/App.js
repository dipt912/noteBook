import React, { Component } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';
import AppRouter from './Router';
import firebase from 'firebase';
import history from '../src/history';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDW8rVnXhuInSNsoneVVlkgxRl-R_VYKe0",
      authDomain: "notebook-31087.firebaseapp.com",
      databaseURL: "https://notebook-31087.firebaseio.com",
      projectId: "notebook-31087",
      storageBucket: "",
      messagingSenderId: "699775913138"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>

        <AppRouter history={history}/>

      </div>
    );
  }
}

export default App;
