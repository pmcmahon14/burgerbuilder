import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import './App.module.css';

class App extends Component {
    render() {
        return (
          <div>
              <Layout>
                  <Switch>
                    <Route path="/" component={BurgerBuilder}/>
                    <Route path="/checkout" component={Checkout}/>
                  </Switch>
              </Layout>
          </div>
        );
    }
}

export default App;
