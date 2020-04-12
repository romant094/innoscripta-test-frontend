import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from 'reactstrap';
import {withPizzaService} from '../hoc';
import {Catalog} from '../catalog';
import {EmptyCatalog} from '../empty-catalog';
import {Spinner} from '../spinner';
import {Elements} from '../parts';
import {formatProducts} from '../../utils';
import {onProductsLoaded} from '../../actions';

const ProductsContainer = ({product, pizzaService}) => {
    const {title, type} = product;
    const [items, setItems] = useState(null);
    const products = useSelector(state => state.products.filter(prod => prod.type === type));
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length > 0) {
            setItems(products);
        } else {
            pizzaService.request(`/products/${type}`)
                .then(res => {
                    const items = formatProducts(res.result);
                    setItems(items);
                    onProductsLoaded(items, dispatch)
                });
        }
    }, [type, pizzaService, dispatch]);

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
