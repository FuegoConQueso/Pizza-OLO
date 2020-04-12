import React, { Component } from 'react';
import './Header.css';
 
class Header extends Component {
  render() {
    return (
        <div className="header-div">
            <div className="header-text">
                {this.props.text}
            </div>
            <div className="login-button">
                <button type="button">Log In</button>
            </div>
            <div className="signup-button">
                <button type="button">Create Acccount</button>
            </div>
            <div className="cart-button">
                <button type="button">Cart</button>
            </div>
        </div>
    );
  }
}
 
export default Header;