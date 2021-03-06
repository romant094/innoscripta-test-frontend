import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {Button, Card, CardBody, CardImg, CardText} from 'reactstrap';
import {Elements} from '../parts';
import {onAddItem} from '../../actions';

const CardItem = styled(Card)`
  border: none;
`;

const CatalogCardText = styled(CardText)`
  color: rgb(115, 121, 140);
  font-weight: 300;
  font-size: 14px;
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

const Body = styled(CardBody)`
  padding: 1.25rem 0.5rem;
`;

export const CatalogCard = ({item}) => {
    const {image, title, ingredients, price, type} = item;
    const dispatch = useDispatch();

    const handleClick = () => {
        onAddItem(item, dispatch);
    };

    const imageSrc = `/images/${image}`;

    return (
        <CardItem>
            <CardImg top width="100%" src={imageSrc} alt={type} />
            <Body>
                <Elements.CardTitle>{title}</Elements.CardTitle>
                <CatalogCardText>{ingredients}</CatalogCardText>
                <CatalogCardFooter tag='div'>
                    <CardPrice tag='span'>Price: ${price}</CardPrice>
                    <Button
                        outline
                        color='primary'
                        onClick={handleClick}
                    >
                        Add to cart
                    </Button>
                </CatalogCardFooter>
            </Body>
        </CardItem>
    );
};
