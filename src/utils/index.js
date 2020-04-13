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

export const debounce = function (f, ms) {
    let isCooldown = false;

    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
};
