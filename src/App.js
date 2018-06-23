import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CoinList from './components/home/CoinList';
import Portfolio from './components/portfolio/Portfolio';
import AddCoin from './components/portfolio/AddCoin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={CoinList} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/addcoin" component={AddCoin} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
