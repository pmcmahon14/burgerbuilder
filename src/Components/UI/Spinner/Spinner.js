import React from 'react';

import classes from './Spinner.module.css';

//creates spinner while order is placed
const spinner = () => (
    <div className={classes.Loader}>Loading...</div>
);

export default spinner;