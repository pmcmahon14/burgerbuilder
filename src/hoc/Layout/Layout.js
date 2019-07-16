import React, {useState} from 'react';
import {connect} from 'react-redux';

import Fragment from '../Fragment/Fragment';
import classes from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    };

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    };

        return (
            <Fragment>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
        )
    }


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);