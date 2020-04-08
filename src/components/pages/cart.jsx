import React from 'react';
import {useSelector} from 'react-redux';

export const Cart = () => {
    const cart = useSelector(state => state.cart);
    // TODO replace to utils
    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

    return (
        <div>
            {
                cart.map(item => (
                    <div className='mb-5' key={item.title}>
                        <div>{item.title}</div>
                        <div>{item.count}</div>
                        <div>{item.price}</div>
                    </div>
                ))
            }
            Total: {total}
        </div>
    );
};
