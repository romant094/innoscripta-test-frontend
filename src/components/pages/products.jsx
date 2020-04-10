import React, {useEffect, useState} from 'react';
import {Container} from 'reactstrap';
import {withPizzaService} from '../hoc';
import {Catalog} from '../catalog';
import {EmptyCatalog} from '../empty-catalog';
import {Spinner} from '../spinner';
import {Elements} from '../parts';

const ProductsContainer = ({product, pizzaService}) => {
    const {title, url} = product;
    const [items, setItems] = useState(null);

    useEffect(() => {
        pizzaService.request(`/products${url}`)
            .then(res => setItems(res));
    }, [url, pizzaService]);

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

export const Products = withPizzaService()(ProductsContainer);
