import React, { Component } from 'react';
import Ingredient from './Ingredient';

class IngredientList extends Component {
    render() {
        const ingredients = props.ingredients;

        const listItems = ingredients.map((item) =>
        <Ingredient key={item.name} value={item} />

        );
        return (
            {listItems}
        );
    }
  }
   
  export default IngredientList;