const initialState = {
    cart: []
};

export const reducer = (state = initialState, action) => {
    const {cart} = state;
    const {type, payload} = action;

    switch (type) {
        case 'UPDATE_CART':
            return {
                ...state,
                cart: payload
            };
        case 'ADD_ITEM_TO_CART':

            return {
                ...state,
                cart: [...cart, payload]
            };
        case 'DELETE_ITEM_FROM_CART':
            return {
                ...state,
                cart: [
                    ...cart.slice(0, payload),
                    ...cart.slice(payload)
                ]
            };
        case 'CHANGE_CART_ITEM_COUNT':
            const {id, count} = payload;
            const editableItem = cart[id];
            editableItem.count = editableItem.count + count;

            return {
                ...state,
                cart: [
                    ...cart.slice(0, id),
                    editableItem,
                    ...cart.slice(id)
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
