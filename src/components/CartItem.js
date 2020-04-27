import React, { Component } from 'react';
import Pizza from './Pizza';
 
class CartItem extends Component {
    constructor(props) {
        super(props);
        this.removeHandler = this.removeHandler.bind(this);
    }

    removeHandler() {
        this.props.removeHandler(this.props.id);
    }

  render() {
      
      const images = require.context('../assets', true);
      return(
            <div className="subgrid-container">
                <div className="grid-item row-start">
                    <div className="grid-item-contents">
                    <img src={images('./' + this.props.pizza.image)} width="100" height="100"/>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="grid-item-contents">
                    <span>{this.props.pizza.sizeName()} {this.props.pizza.name} Pizza</span>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="grid-item-contents">
                    <span>{this.props.pizza.price()}</span>
                    </div>
                </div>
                <div className="grid-item row-end">
                    <div className="grid-item-contents">
                    <input type="number" value={this.props.pizza.count}/>
                    <button onClick={this.removeHandler}>Remove</button>
                    </div>
                </div>
            </div>
      );
    
    }
  }
   
  export default CartItem;