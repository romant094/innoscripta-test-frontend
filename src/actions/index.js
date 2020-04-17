export const onAddItem = (item, next) => {
    next({
        type: 'ADD_ITEM_TO_CART',
        payload: item
    })
};

export const onDecreaseItemCount = (item, next) => {
    next({
        type: 'DECREASE_CART_ITEM_COUNT',
        payload: item
    })
};

export const onDeleteItem = (id, next) => {
    next({
        type: 'DELETE_ITEM_FROM_CART',
        payload: id
    })
};

export const onClearCart = (next) => {
    next({
        type: 'CLEAR_CART'
    })
};

export const onProductsLoaded = (items, next) => {
    next({
        type: 'PRODUCTS_LOADED',
        payload: items
    })
};

export const onChangeAuthType = (type, next) => {
    next({
        type: 'CHANGE_AUTH_TYPE',
        payload: type
    })
};

export const onStatusMessageChange = (msg, next) => {
    next({
        type: 'CHANGE_STATUS_MESSAGE',
        payload: msg
    })
};
