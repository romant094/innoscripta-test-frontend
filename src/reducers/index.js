import {updateCart} from './utils';

const initialState = {
    cart: [],
    products: [],
    authType: null,
    statusMessage: null
};

export const reducer = (state = initialState, action) => {
    const {cart, products} = state;
    const {type, payload} = action;

    switch (type) {
        case 'CHANGE_STATUS_MESSAGE':
            return {
                ...state,
                statusMessage: payload
            };
        case 'CHANGE_AUTH_TYPE':
            return {
                ...state,
                authType: payload
            };
        case 'PRODUCTS_LOADED':
            return {
                ...state,
                products: [...products, ...payload]
            };
        case 'UPDATE_DATA_FROM_COOKIES':
            return {
                ...state,
                cart: payload.cart
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
