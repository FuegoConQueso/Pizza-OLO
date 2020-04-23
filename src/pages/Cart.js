import React, { Component } from 'react';
import Header from '../components/Header';
import './Cart.css';
import CartItem from '../components/CartItem';
import Pizza from '../components/Pizza';
import PizzaList from '../components/PizzaList';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        var pzalist = new PizzaList();
        pzalist.addPizza(new Pizza("Veggie", "pizza1.jpg", ["9.99","11.99","13.99"], "2", "1"));
        pzalist.addPizza(new Pizza("Deluxe", "pizza2.jpg", ["11.99","13.99","15.99"], "2", "1"));
        this.state = {pizzas:pzalist};
    }

    handleRemove(index) {
        this.state.pizzas.removePizza(index);
        this.forceUpdate();
    }

    render() {
        var pizzacount = this.state.pizzas.cartSize();
        var cartitems = [];
        for(var i = 0; i < pizzacount; i++) {
            cartitems.push(
                <CartItem
                    pizza={this.state.pizzas.getPizza(i)}
                    key={i}
                    id={i}
                    removeHandler={this.handleRemove}
                />);
        }

        return (
            <div>
                <Header text="Cart" />

                <h2>Cart</h2>

                <div className="grid-container">
                    <div className="grid-label"/>
                    <div className="grid-label">
                        <strong>Item</strong>
                    </div>
                    <div className="grid-label">
                        <strong>Price</strong>
                    </div>
                    <div className="grid-label">
                        <strong>Quantity</strong>
                    </div>
                    
                    {cartitems}

                </div>

                <div>
                    <strong>Total:</strong>
                    <span>${this.state.pizzas.totalPrice().toFixed(2)}</span>
                </div>

                <div>
                    <button className="end-button" role="button">Go To Checkout</button>
                    <button className="end-button" role="button">Back to Select Pizzas</button>
                </div>
            </div>
        );
    }
}

export default Cart;