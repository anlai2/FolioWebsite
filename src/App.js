import React, { Component } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CoinList from './components/home/CoinList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <CoinList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
