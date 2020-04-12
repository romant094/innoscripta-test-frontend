import Cookies from 'cookies-js';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from '../reducers';

const logMiddleware = () => next => action => {
    console.warn(action.type);
    return next(action);
};

export const store = createStore(reducer, applyMiddleware(logMiddleware));

store.subscribe(() => {
    const {cart} = store.getState();
    Cookies.set('cart', JSON.stringify(cart));
});
