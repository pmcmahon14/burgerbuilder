import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../Actions/actionTypes';
import {logoutSaga, checkAuthTimeoutSaga} from "./Auth";

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);

}