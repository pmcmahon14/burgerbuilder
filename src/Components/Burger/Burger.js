import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    //create object with keys method to turn into array, allow map method
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        //creates new array for each ingredient
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            //returns array of JSX elements
            return <BurgerIngredient key={igKey + i} type={igKey}/>;
        });
    })
        //reduce all arrays into one and concatenate current into prior
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        //displays burger as being built; starts with bun only and ingredient sequence based on state object
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default Burger;