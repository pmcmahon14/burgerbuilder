import {put} from 'redux-saga/effects';

import axios from "../../axiosOrders";
import * as Actions from '../Actions';

export function* initIngredientsSaga(action) {
    try {
        const response = yield axios.get('https://burgerbuilder-f8583.firebaseio.com/ingredients.json');
        yield put(Actions.setIngredients(response.data));
    } catch (error) {
        yield put(Actions.fetchIngredientsFailed());
    }
}