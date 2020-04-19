import React from 'react';
import styled from 'styled-components';
import {Col, Button} from 'reactstrap';
import {Elements} from '../../../parts';
import bin from '../../../../assests/images/icons/bin.svg';
import {useDispatch} from 'react-redux';
import {onAddItem, onDecreaseItemCount, onDeleteItem} from '../../../../actions';
import {round} from '../../../../utils';

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
  margin-right: -15px;
  margin-left: -15px;
`;

const CardWrapper = styled(Wrapper)`
  border-top: 1px solid #f1f2f5;
  padding: 10px 0;
  &:last-child{
    border-bottom: 1px solid #f1f2f5;
  }
`;

const ImageWrapper = styled(Wrapper)`
  margin-right: 0;
`;

const ItemImage = styled.img`
  display:block;
  width: 100%;
  height: auto;
`;

const CountButton = styled(Button)`
  font-size: 20px;
  line-height: 1;
  border-radius: 8px;
  display:flex;
  align-items:center;
  justify-content:center;
  height: 30px;
  width: 30px;
  padding: 0;
`;

const CardPart = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`;

const CountNumber = styled.span`
  margin-left: .5rem;
  margin-right: .5rem;
`;

const DeleteButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  &:focus{
    outline: 0;
  }
`;

const Ingredients = styled.p`
  color: rgb(115, 121, 140);
  font-weight: 300;
  font-size: 14px;
`;

const CardTotal = styled.div`
  font-size: 20px;
`;

export const CartItem = ({item, id, rate}) => {
    const {title, image, price, count, ingredients} = item;
    const dispatch = useDispatch();

    const handleIncreaseCount = () => {
        onAddItem(item, dispatch);
    };

    const handleDecreaseCount = () => {
        onDecreaseItemCount(item, dispatch);
    };

    const handleDeleteItem = () => {
        onDeleteItem(id, dispatch);
    };

    const total = price * count * rate;
    const imageSrc = `/images/${image}`;

    return (
        <Col xs={12}>
            <CardWrapper className='flex-column flex-sm-row'>
                <Col xs={6} sm={2}>
                    <ImageWrapper>
                        <ItemImage src={imageSrc} alt={title} />
                    </ImageWrapper>
                </Col>
                <Col sm={10}>
                    <Wrapper className='flex-column flex-sm-row'>
                        <Col sm={6} className='text-center text-sm-left'>
                            <Elements.CardTitle>{title}</Elements.CardTitle>
                            <Ingredients>{ingredients}</Ingredients>
                        </Col>
                        <Col sm={6} className='d-flex justify-content-between align-items-center pl-sm-0 pr-sm-0'>
                            <Col sm={3}>
                                <CardPart>
                                    <CountButton
                                        outline
                                        color='primary'
                                        onClick={handleDecreaseCount}
                                    >
                                        –
                                    </CountButton>
                                    <CountNumber>{count}</CountNumber>
                                    <CountButton
                                        outline
                                        color='primary'
                                        onClick={handleIncreaseCount}
                                    >
                                        +
                                    </CountButton>
                                </CardPart>
                            </Col>
                            <Col sm={1}>
                                <CardTotal>{round(total)}</CardTotal>
                            </Col>
                            <DeleteButton onClick={handleDeleteItem}>
                                <ItemImage src={bin} alt='remove' />
                            </DeleteButton>
                        </Col>
                    </Wrapper>
                </Col>
            </CardWrapper>
        </Col>
    );
};
