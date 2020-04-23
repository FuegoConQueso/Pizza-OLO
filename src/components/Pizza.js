import React from 'react';

class Pizza {
    constructor(name, image, prices, size, count) {
        this.name = name;
        this.image = image;
        this.prices = prices;
        this.size = parseInt(size);
        this.count = parseInt(count);
    }

    price() {
        return parseFloat(this.prices[this.size]);
    }

    sizeName() {
        
      switch (this.size) {
          case 0:
            return "Small";
          case 1:
            return "Medium";
          case 2:
            return "Large";
      }
    }
  }
  

  export default Pizza;