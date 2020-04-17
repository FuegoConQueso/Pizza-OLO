import React, { Component } from 'react';
import './HomeBody.css';
import SpecialtyImage from '../assets/specialty-pizzas.jpg';
import CustomImage from '../assets/custom-pizzas.jpg';
 
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
                    Specialty Pizzas
                    <br />
                    <a href="/custom">
                        <img className="imgContainer" src={SpecialtyImage}/>
                    </a>
                </div>
                <div className="custom">
                    Custom Pizzas
                    <br />
                    <a href="/custom">
                        <img className="imgContainer" src={CustomImage}/>
                    </a>
                </div>
                <div className="store-info">
                    Info
                    <br /><br />

                    <div className="store-hours">
                        Hours
                        <br />
                        Monday-Friday: 11AM - 9PM
                        <br />
                        Saturday: 11AM - 9PM
                        <br />
                        Sunday: 11AM - 7PM
                    </div>
                    <br />
                    <div className="store-contact">
                        Contact
                        <br />
                        Phone: (202)-555-0133
                        <br />
                        Address: 952 Snow Grove, MN
                    </div>

                 </div>

            </div>
        </div>
    );
  }
}
 
export default HomeBody;