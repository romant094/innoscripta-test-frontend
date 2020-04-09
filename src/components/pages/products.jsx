import React, {useEffect, useState} from 'react';
import {Container} from 'reactstrap';
import {Catalog} from '../catalog';
import {EmptyCatalog} from '../empty-catalog';
import {Spinner} from '../spinner';
import {Elements} from '../parts';
import pizza from '../../assests/images/menu/chicken-bbq.jpg';

const catalog = [
    {
        title: 'Buffalo Chicken',
        ingredients: 'Grilled chicken, buffalo sauce, mozzarella, cheddar, red onions',
        img: pizza,
        price: 15
    },
    {
        title: 'Chicken BBQ',
        ingredients: 'Grilled chicken, bbq sauce, bacon, mozzarella, fresh basil, red onions',
        img: pizza,
        price: 15
    },
    {
        title: 'Supreme',
        ingredients: 'Pepperoni, fresh basil, mozzarella, italian sausage, bacon, mushrooms, red onions, black olives, green peppers, marinara sauce',
        img: pizza,
        price: 15
    },
];

export const Products = ({product}) => {
    const {title, url} = product;
    const [items, setItems] = useState(null);

    useEffect(() => {
        // TODO fetch to the server
        if (url === '/pizza') {
            // setTimeout is only for demo
            setTimeout(() => setItems(catalog), 1000)
        } else {
            setTimeout(() => setItems([]), 1000)
        }
    }, [url]);

    if (!items) {
        return <Spinner />
    }

    return (
        <Container>
            <Elements.PageHeading>{title}</Elements.PageHeading>
            {
                items.length
                    ? <Catalog items={items} />
                    : <EmptyCatalog product={product} />
            }
        </Container>
    );
};
