import React, { Component } from 'react';
import './Header.css';
 
class Header extends Component {
  render() {
    return (
        <div className="header-div">
            <div className="header-text">
                {this.props.text}
            </div>

            <div className="cart-button">
                <a href="/cart">
                    <button type="button">Cart</button>
                </a>
            </div>

            <div className="signup-button">
                <a href="/signup">
                      <button type="button">Create Account</button>
                </a>      
            </div>

            <div className="login-button">
                <a href="/login">
                    <button type="button">Log In</button>
                </a>
            </div>
           
           
        </div>
    );
  }
}
 
export default Header;