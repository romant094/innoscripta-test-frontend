import Cookies from 'cookies-js';
import {createStore} from 'redux';
import {reducer} from '../reducers';

// Logging middleware for dev
// const logMiddleware = () => next => action => {
//     console.warn(action.type);
//     return next(action);
// };
// export const store = createStore(reducer, applyMiddleware(logMiddleware));

export const store = createStore(reducer);

store.subscribe(() => {
    const {cart} = store.getState();
    Cookies.set('cart', JSON.stringify(cart));
});
