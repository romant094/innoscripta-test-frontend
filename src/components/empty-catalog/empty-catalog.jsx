import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Col} from 'reactstrap';

const ComponentWrapper = styled.div`
  color: rgb(115,121,140);
  text-align: center;
  font-size: 20px;
`;

const EmptyCatalogImage = styled.img`
  width: 100%;
  height: auto;
  display:block;
  margin: 0 auto;
`;

const Text = styled.div`
    margin-bottom: .3rem;
    font-weight: 300;
`;

export const EmptyCatalog = ({product: {imgUrl, title}}) => (
    <ComponentWrapper>
        <div>
            <Text>We are creating the menu for this section.</Text>
            <Text>But now you should taste our super <Link to='/pizza'>pizza</Link>!</Text>
            <Text>Or you can go to <Link to='/'>homepage</Link> and find the best promo.</Text>
        </div>
        <Col xs={8} md={6} xl={3} lg={4} className='mx-auto'>
            <EmptyCatalogImage src={imgUrl} alt={title} />
        </Col>
    </ComponentWrapper>
);
