import React, { Component } from 'react';
import PropTypes from 'prop-types';


import logo from '../img/common/logo.png';


export default class AppHeader extends Component {
  // static displayName = 'BAH App Header';
  //
  // static propTypes = {
  //   appName: PropTypes.string.isRequired,
  // };
  //
  // handleClick = () => {
  //   alert('You have logged out.'); // eslint-disable-line no-alert
  // }

  render() {
    return (
      <header className="header">
        <div className="header__actions header__actions-ED">
          <p>Logout</p>
        </div>
        <div className="header__info">
          <div className="header__info-logo">
            <img src={logo} alt="VBMS Logo" />
          </div>
          <div className="header__info-title">
            <h1>{this.props.appName}</h1>
          </div>
        </div>
      </header>
    );
  }
}
