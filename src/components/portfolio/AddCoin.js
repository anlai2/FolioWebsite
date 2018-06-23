import React, { Component } from 'react';
import { connect } from 'react-redux';
import { coinsSaved } from '../../actions/portfolioActions';
import PropTypes from 'prop-types';

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

    this.props.coinsSaved(this.state.checked);
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
                    style={{ backgrounColor: '#00ff00' }}
                  >
                    <input
                      className="form-check-input col-md-3"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      onChange={() => {
                        checked.indexOf(coin.symbol) > -1
                          ? this.setState({
                              checked: [
                                ...checked.slice(
                                  0,
                                  checked.indexOf(coin.symbol)
                                ),
                                ...checked.slice(
                                  checked.indexOf(coin.symbol) + 1
                                )
                              ]
                            })
                          : this.setState({
                              checked: [...checked, coin.symbol]
                            });
                      }}
                    />
                    <label className="form-check-label col-md-9">
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

AddCoin.propTypes = {
  checked: PropTypes.array
};

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  {
    coinsSaved
  }
)(AddCoin);
