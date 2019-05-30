import React, {Component} from 'react';
import {connect} from 'react-redux';

import Fragment from '../Fragment/Fragment';
import classes from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    };

    render () {
        return (
            <Fragment>
            <Toolbar
                isAuth={this.props.isAuthenticated}
                drawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer
                isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer}
                closed={this.SideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);