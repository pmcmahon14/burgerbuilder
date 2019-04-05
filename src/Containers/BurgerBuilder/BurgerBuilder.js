import React, {Component} from 'react';
import Fragment from '../../hoc/Fragment';
import Burger from '../../Components/Burger/Burger';

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
                <div>Build Controls</div>

            </Fragment>
        );
    }
}

export default BurgerBuilder;