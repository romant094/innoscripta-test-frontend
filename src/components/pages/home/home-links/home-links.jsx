import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import {NAV_LINKS} from '../../../constants';

const Image = styled.img`
  display:block;
  width: 100%;
  height: auto;
  margin: 0 auto;
  transition: transform .3s;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding: 20px;
  border: 1px solid #e6e6e6;
  border-radius: 15px;
  overflow: hidden;
  &:hover{
    img{
      transform: scale(1.2,1.2);
    }
    div{
      opacity: 1;
    }
  }
`;

const ImageText = styled.div`
  position: absolute;
  color: #fff;
  font-weight: 500;
  z-index: 6;
  opacity: 0;
  transition: opacity .3s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 48px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const ImageWrapperOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50,50,50,.5);
  opacity: 0;
  z-index: 5;
  transition: opacity .3s;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const CustomLink = styled(Link)`
  &:hover{
    text-decoration: none;
  }
`;

export const HomeLinks = () => {
    return (
        <Container>
            <Header>Menu</Header>
            <Row>
                {
                    NAV_LINKS.map(({imgUrl, title, url}) => (
                        <Col key={title} xs={6} md={4} xl={3} className='mb-4 mb-sm-4'>
                            <CustomLink to={url}>
                                <ImageWrapper>
                                    <ImageWrapperOverlay />
                                    <ImageText>{title}</ImageText>
                                    <Image src={imgUrl} alt={title} />
                                </ImageWrapper>
                            </CustomLink>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};
