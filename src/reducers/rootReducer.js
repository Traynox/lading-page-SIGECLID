import { combineReducers } from 'redux';

import { checkoutReducer } from '../reducers/checkoutReducer';
import { cestaReducer } from '../reducers/cestaReducer';

export const rootReducer = combineReducers({
    checkout: checkoutReducer,
    cesta: cestaReducer
});