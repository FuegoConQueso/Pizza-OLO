import React from 'react';
import Header from '../components/Header';
import Ingredient from '../components/Ingredient';
import './Customize.css';

function Customize() {
    
    var ingredient1 = {name:"mushrooms", price:1.29};
    
    return (
        <div>
            <Header text="Customize Your Pizza" />
            <h1>Custom Pizza:</h1>
            <form className="customize-form">
                <div className="item-box">
                    <div className="label">
                    Size:
                    </div>
                    <div className="radio">
                        <label>
                            Small
                            <input type="radio" name="size" value="small" />
                            $7.99
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            Medium
                            <input type="radio" name="size" value="medium" />
                            $9.99
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            Large
                            <input type="radio" name="size" value="large" checked={true} />
                            $11.99
                        </label>
                    </div>
                </div>
                <br/>
                <Ingredient value={ingredient1}/>
            </form>
        </div>
    );
}

export default Customize;