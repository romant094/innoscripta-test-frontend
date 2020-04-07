import React from 'react';
import {CardGroup, Container, Row} from 'reactstrap';
import {CatalogCard} from '../card';

export const Catalog = ({items}) => {
    return (
        <Container>
            <Row>
                <CardGroup>
                    {
                        items.map(item => <CatalogCard key={item.title} item={item} />)
                    }
                </CardGroup>
            </Row>
        </Container>
    );
};
