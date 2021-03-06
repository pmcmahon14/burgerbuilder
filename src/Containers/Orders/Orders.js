import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Order from '../../Components/Order/Order';
import axios from '../../axiosOrders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../Store/Actions/index';
import Spinner from '../../Components/UI/Spinner/Spinner';

const Orders = props => {
    useEffect(() => {
        props.onFetchOrders(props.token, props.userId);
    }, []);

        let orders = <Spinner/>;
        if (!props.loading) {
            orders = props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>
                ))
            }
        return (
            <div>
                {orders}
            </div>
        );
    }


const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));