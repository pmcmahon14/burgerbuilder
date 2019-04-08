import React from 'react';
import Fragment from '../../hoc/Fragment';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => (
    <Fragment>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default Layout;