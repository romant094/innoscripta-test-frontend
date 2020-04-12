export const formatProducts = products => products.map(product => {
    const {_id, image, ingredients, price, title, type} = product;

    return {
        id: _id,
        image,
        ingredients,
        price,
        title,
        type
    }
});
