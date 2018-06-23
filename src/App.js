import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';

import store from './store';
import Navbar from './components/common/Navbar';
import CoinList from './components/home/CoinList';
import Portfolio from './components/portfolio/Portfolio';
import AddCoin from './components/portfolio/AddCoin';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAXk7-GnAzz0UHoG4_RuW4FWbeZXkoY4SU',
      authDomain: 'cointracker-bb394.firebaseapp.com',
      databaseURL: 'https://cointracker-bb394.firebaseio.com',
      projectId: 'cointracker-bb394',
      storageBucket: '',
      messagingSenderId: '422073842257'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={CoinList} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/addcoin" component={AddCoin} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
