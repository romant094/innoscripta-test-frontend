import {updateCart} from './utils';

const initialState = {
    cart: [],
    currency: 'usd'
};

export const reducer = (state = initialState, action) => {
    const {cart} = state;
    const {type, payload} = action;

    switch (type) {
        case 'UPDATE_DATA_FROM_COOKIES':
            return {
                ...state,
                cart: payload.cart,
                currency: payload.currency
            };

        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cart: updateCart(cart, payload, 1)
            };

        case 'DECREASE_CART_ITEM_COUNT':
            return {
                ...state,
                cart: updateCart(cart, payload, -1)
            };

        case 'DELETE_ITEM_FROM_CART':
            return {
                ...state,
                cart: [
                    ...cart.slice(0, payload),
                    ...cart.slice(payload + 1)
                ]
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            };

        default:
            return state;
    }
};