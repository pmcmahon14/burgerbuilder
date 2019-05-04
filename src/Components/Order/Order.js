import React from 'react';

import classes from './Order.module.css';

const Order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients: lettuce (1)</p>
        <p>Price: <strong>5.45</strong></p>
    </div>
);

export default Order;