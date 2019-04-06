import React, {Component} from 'react';
import Fragment from '../../hoc/Fragment';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Fragment>
        );
    }
}

export default BurgerBuilder;