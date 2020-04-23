import React from 'react';
import Pizza from './Pizza';

class PizzaList {

  constructor() {
        if (localStorage && localStorage.getItem('cart-pizzas' )) {
            const pizzalist = JSON.parse(localStorage.getItem('cart-pizzas'));
            this.pizzas = pizzalist.map((item) =>
            new Pizza(item.name, item.image, item.prices, item.size, item.count)
            );
        }
        else {
            this.pizzas = [];
        }
    }

    cartSize() {
        
        if (this.pizzas && this.pizzas.length > 0) {
            return this.pizzas.length;
        }
        else {
            return 0;
        }
    }

    addPizza(pizza) {
        this.pizzas.push(pizza);
        this.updateSavedPizzas();
    }
    
    removePizza(index) {
        this.pizzas.splice(index, 1);
        this.updateSavedPizzas();
        console.log("removePizza " + index);
    }
    
    updateSavedPizzas() {
        localStorage.setItem('cart-pizzas',
        JSON.stringify(this.pizzas));
    }

    getPizza(index) {
        return this.pizzas[index];
    }

    totalPrice() {
        var totalPrice = 0;
        for (var i = 0; i < this.pizzas.length; i++) {
            totalPrice += this.pizzas[i].count * this.pizzas[i].price();
        }
        return totalPrice;
    }
  }
  

  export default PizzaList;