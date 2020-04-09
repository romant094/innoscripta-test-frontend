export const updateCartItems = (cart, item, index, amount) => {
    if (index === -1) {
        return [
            ...cart,
            {
                ...item,
                count: 1
            }
        ]
    }
    const newItem = cart[index];

    return [
        ...cart.slice(0, index),
        {
            ...newItem,
            count: newItem.count > 1 ? newItem.count + amount : amount === -1 ? newItem.count : newItem.count + amount
        },
        ...cart.slice(index + 1)
    ]
};

export const updateCart = (cart, payload, amount) => {
    const index = cart.findIndex(item => item.title === payload.title);
    return updateCartItems(cart, payload, index, amount);
};
