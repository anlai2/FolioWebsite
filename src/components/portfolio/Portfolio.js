import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="lead text-muted">Portfolio</p>
              <p>
                You have not yet added any assets, add your assets to track your
                portfolio value{' '}
              </p>
              <Link to="/addcoin" className="btn btn-lg btn-info">
                Add a Coin
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
