import React from 'react';
import classes from './BuildControl.module.css';

//creates add/delete buttons for each ingredient, Less set to disabled at amount 0
const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>Less</button>
        <button
            className={classes.More}
            onClick={props.added}>More</button>
    </div>
);

export default BuildControl;