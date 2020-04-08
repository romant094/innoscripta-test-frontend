import React, {useEffect, useState} from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';
import {Catalog} from '../catalog';
import {EmptyCatalog} from '../empty-catalog';
import pizza from '../../assests/images/menu/chicken-bbq.jpg';
import {Spinner} from '../spinner';

const CatalogHeader = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`;

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
            <CatalogHeader>{title}</CatalogHeader>
            {
                items.length
                    ? <Catalog items={items} />
                    : <EmptyCatalog product={product} />
            }
        </Container>
    );
};
