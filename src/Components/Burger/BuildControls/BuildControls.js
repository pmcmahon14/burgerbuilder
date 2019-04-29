import React from 'react';
import classes from './BuildControls.module.css';
import  BuildControl from './BuildControl/BuildControl';

//create array listing ingredients by label and type
const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    /*{label: 'Pickle', type: 'pickle'},
    {label: 'Tomato', type: 'tomato'},
    {label: 'Mayo', type: 'mayo'},
    {label: 'Ketchup', type: 'ketchup'},
    {label: 'Mustard', type: 'mustard'},
    {label: 'BBQ', type: 'bbq'},
    {label: 'Salsa', type: 'salsa'},*/
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default BuildControls;