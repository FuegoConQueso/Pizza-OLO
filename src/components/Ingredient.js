import React, { Component } from 'react';
import './Ingredient.css';
 
class Ingredient extends Component {
  render() {
      return( 
        <div className="item-box">
          <div className="label">
          {this.props.value.name}:
          </div>
          <div className="radio">
              <label>
                  <input type="radio" name={this.props.value.name} value="no" checked={true} />
              </label>
          </div>
          <div className="radio">
              <label>
                  <input type="radio" name={this.props.value.name} value="normal" />
              </label>
          </div>
          <div className="radio">
              <label>
                  <input type="radio" name={this.props.value.name} value="extra"/>
              </label>
          </div>
          <div>
          Price: ${this.props.value.price}
          </div>
        </div>
      );
    }
  }
   
  export default Ingredient;