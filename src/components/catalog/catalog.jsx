import React from 'react';
import {CardGroup, Col} from 'reactstrap';
import {CatalogCard} from '../card';

export const Catalog = ({items}) => (
    <CardGroup>
        {
            items.map(item => (
                <Col xs={12} md={6} lg={4} xl={3} key={item.title}>
                    <CatalogCard key={item.title} item={item} />
                </Col>
            ))
        }
    </CardGroup>
);
