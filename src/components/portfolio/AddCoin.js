import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coinsSaved } from '../../actions/portfolioActions';

class AddCoin extends Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      checked: []
    };
  }

  onSubmit = e => {
    e.preventDefault();

    if (!_.isEmpty(this.state.checked)) {
      this.props.coinsSaved(this.state.checked, this.props.history);
    } else {
      alert('Please select at least one coin.');
    }
  };

  componentWillMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(res => res.json())
      .then(data => {
        this.setState({ coins: data });
      });
  }

  render() {
    const { checked } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="lead text-muted">Add Coins</p>
            <div className="form-check">
              <ul className="list-group">
                {this.state.coins.map((coin, index) => (
                  <li
                    className="list-group-item"
                    key={index}
                    style={{ backgroundColor: index % 2 ? '#f0f0f5' : 'white' }}
                  >
                    <input
                      className="form-check-input col-md-3"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      style={{ left: 35 }}
                      onChange={() => {
                        checked.indexOf(coin) > -1
                          ? this.setState({
                              checked: [
                                ...checked.slice(0, checked.indexOf(coin)),
                                ...checked.slice(checked.indexOf(coin) + 1)
                              ]
                            })
                          : this.setState({
                              checked: [...checked, coin]
                            });
                      }}
                    />
                    <label
                      className="form-check-label col-md-9"
                      style={{ left: 35 }}
                    >
                      {coin.name}
                    </label>
                  </li>
                ))}
              </ul>
              <input
                type="submit"
                value="Submit"
                className="btn btn-info btn-block mt-4"
                onClick={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    coinsSaved
  }
)(AddCoin);
