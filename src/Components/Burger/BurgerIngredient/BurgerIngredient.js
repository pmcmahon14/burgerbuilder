import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        //start with bun only
        let ingredient = null;

        //switch statement analyzes type of ingredient added or deleted for image; classes from module.css
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case ('pickle'):
                ingredient = <div className={classes.Pickle}></div>
                break;
            case ('lettuce'):
                ingredient = <div className={classes.Lettuce}></div>;
                break;
            case ('tomato'):
                ingredient = <div className={classes.Tomato}></div>;
                break;
            case ('mayo'):
                ingredient = <div className={classes.Mayo}></div>;
                break;
            case ('ketchup'):
                ingredient = <div className={classes.Ketchup}></div>;
                break;
            case ('mustard'):
                ingredient = <div className={classes.Mustard}></div>
                break;
            case ('bbq'):
                ingredient = <div className={classes.BBQ}></div>;
                break;
            case ('salsa'):
                ingredient = <div className={classes.Salsa}></div>
                break;
            default:
                ingredient = null;
        }
        //returns single ingredient
        return ingredient;
    }
}

//prop type validation; will pass error if prop not passed
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;