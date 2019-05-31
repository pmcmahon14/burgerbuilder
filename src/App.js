import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import Orders from './Containers/Orders/Orders';
import './App.module.css';
import Auth from './Containers/Auth/Auth';
import Logout from './Containers/Auth/Logout/Logout';

class App extends Component {
    render() {
        return (
          <div>
              <Layout>
                  <Switch>
                      <Route path="/checkout" component={Checkout}/>
                      <Route path="/orders" component={Orders}/>
                      <Route path="/auth" component={Auth}/>
                      <Route path="/logout" component={Logout}/>
                      <Route path="/" exact component={BurgerBuilder}/>
                  </Switch>
              </Layout>
          </div>
        );
    }
}

export default App;
