import React, { Component } from 'react';

class CoinList extends Component {
  state = {
    coins: []
  };

  componentWillMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(res => res.json())
      .then(data => {
        this.setState({ coins: data });
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="lead text-muted">Dashboard</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Rank</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.coins.map((coin, index) => (
                  <tr key={index}>
                    <th scope="row">{coin.rank}</th>
                    <td>{coin.name}</td>
                    <td>{coin.price_usd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default CoinList;
