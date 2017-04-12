import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
import store from './store/configureStore';

// Pages
import Splash from './components/Splash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
    }
  }

  componentWillMount() {
    const config = {
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: ''
    };

    firebase.initializeApp(config);
  }

  render() {
    let { showSplash } = this.state.showSplash;

    if (showSplash) {
      setTimeout(() => this.setState({ showSplash: false }), 1000);
    }
    StatusBar.setBarStyle('light-content');
    return (
      showSplash ?
       <Splash/> :
       <Provider store={store}>
         <Router />
       </Provider>
    );
  }
}

export default App;
