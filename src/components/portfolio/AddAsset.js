import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assetChanged } from '../../actions/portfolioActions';

class AddAsset extends Component {
  render() {
    const { checked, coins } = this.props.portfolio;
    console.log(coins);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="lead text-muted">Add Coins</p>
            <ul className="list-group">
              {checked.map((coin, index) => (
                <li className="list-group-item" key={index}>
                  <label className="form-check-label col-md-9">
                    {coin.name}
                  </label>
                  <input
                    className="form-control col-md-3"
                    placeholder="0.000000"
                    id="defaultCheck1"
                    onChange={val =>
                      this.props.assetChanged({
                        coin: coin.symbol,
                        value: val.target.value
                      })
                    }
                  />
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
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(
  mapStateToProps,
  { assetChanged }
)(AddAsset);
