import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import styled from 'styled-components';

const CardItem = styled(Card)`
  border: none;
  width: 33%;
`;

const CatalogCardTitle = styled(CardTitle)`
  font-weight:600;
  font-size: 20px;
`;

const CatalogCardText = styled(CardText)`
  color: rgb(115, 121, 140);
  font-weight: 300;
  font-size: 14px;
  // TODO count max height of a block
  height: 100px;
`;

const CatalogCardFooter = styled(CardText)`
  display:flex;
  justify-content: space-between;
  align-items:center;
`;

const CardPrice = styled(CardText)`
  font-size: 16px;
  font-weight: 500;
`;

export const CatalogCard = ({item: {img, title, ingredients, price}}) => (
    <CardItem>
        <CardImg top width="100%" src={img} alt="pizza" />
        <CardBody>
            <CatalogCardTitle>{title}</CatalogCardTitle>
            <CatalogCardText>{ingredients}</CatalogCardText>
            <CatalogCardFooter tag='div'>
                <CardPrice tag='span'>Price: ${price}</CardPrice>
                <Button outline color='primary'>Button</Button>
            </CatalogCardFooter>
        </CardBody>
    </CardItem>
);
