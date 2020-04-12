export const onAddItem = (item, dispatch) => {
    dispatch({
        type: 'ADD_ITEM_TO_CART',
        payload: item
    })
};

export const onDecreaseItemCount = (item, dispatch) => {
    dispatch({
        type: 'DECREASE_CART_ITEM_COUNT',
        payload: item
    })
};

export const onDeleteItem = (id, dispatch) => {
    dispatch({
        type: 'DELETE_ITEM_FROM_CART',
        payload: id
    })
};

export const onProductsLoaded = (items, dispatch) => {
    dispatch({
        type: 'PRODUCTS_LOADED',
        payload: items
    })
};
