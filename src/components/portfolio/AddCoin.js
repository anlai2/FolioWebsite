import React, { Component } from 'react';

class AddCoin extends Component {
  state = {
    coins: [
      {
        name: 'bitcoin'
      }
    ]
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
            <p className="lead text-muted">Add Coins</p>
            <li className="form-check">
              <ul class="list-group">
                {this.state.coins.map((coin, index) => (
                  <li class="list-group-item">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      {coin.name}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCoin;
