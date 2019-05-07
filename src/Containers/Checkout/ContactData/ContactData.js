import React, {Component} from 'react';

import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from "../../../axiosOrders";
import Input from '../../../Components/UI/Input/Input'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            //can calculate price on server
            price: this.props.price,
            customer: {
                name: 'Mr. Magoo',
                address: {
                    street: '123 Maple',
                    zipCode: '12345',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
        //resets loading and purchasing values upon either completion of sending order or error occurs
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    };

    render () {
        let form = (
            <form>
                <Input inputtype="input" type='text' name='name' placeholder='Your Name'/>
                <Input inputtype="input" type='email' name='email' placeholder='Your email'/>
                <Input inputtype="input" type='text' name='street' placeholder='Street'/>
                <Input inputtype="input" type='text' name='postal' placeholder='Postal Code'/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;