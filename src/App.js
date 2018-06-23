import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CoinList from './components/home/CoinList';
import Portfolio from './components/portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={CoinList} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
