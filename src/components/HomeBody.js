import React, { Component } from 'react';
import './HomeBody.css';
import SpecialtyImage from '../assets/specialty-pizzas.jpg';
 
class HomeBody extends Component {
  render() {
    return (
        <div>
            <div className="body-text">
                {this.props.text}
            </div>
            <br />
            <div>
                <div className="specialty">
                    Specialty Pizza's
                    <br />
                    <img className="imgContainer" src={SpecialtyImage}/>
                </div>
                <div className="custom">
                    Custom Pizza's
                </div>
                <div className="store-info">
                    Info
                </div>

            </div>
        </div>
    );
  }
}
 
export default HomeBody;