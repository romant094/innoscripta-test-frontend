import React from 'react';
import {CardGroup, Col} from 'reactstrap';
import {CatalogCard} from '../card';

export const Catalog = ({items}) => (
    <CardGroup>
        {
            items.map(item => (
                <Col xs={12} sm={6} lg={4} xl={3} key={item.id}>
                    <CatalogCard item={item} />
                </Col>
            ))
        }
    </CardGroup>
);
