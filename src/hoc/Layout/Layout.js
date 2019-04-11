import React, {Component} from 'react';
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
            <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.SideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Fragment>
        )
    }
}

export default Layout;