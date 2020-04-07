import React, {useState} from 'react';
import styled from 'styled-components';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators
} from 'reactstrap';

const CarouselSlide = styled(CarouselItem)`
  text-align: center;
`;

const SlideImage = styled.img`
  width: 95%;
  border-radius: 15px;
`;

const Indicators = styled(CarouselIndicators)`
  
  li {
    width: 12px;
    height: 12px;
    border-radius: 100px;
    border-bottom: none;
    border-top: none;
    margin: 0 10px;
    background-color: rgb(84, 76, 72);
    
    &.active{
      background-color: rgb(197, 202, 206);
    }
  }
`;

export const PromoCarousel = ({items, settings}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const nextSlide = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previousSlide = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    return (
        <Carousel
            activeIndex={activeIndex}
            next={nextSlide}
            previous={previousSlide}
            {...settings}
        >
            <Indicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {
                items.map(item => {
                    return (
                        <CarouselSlide
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={item.src}
                        >
                            <SlideImage src={item.src} alt={item.altText} />
                        </CarouselSlide>
                    );
                })
            }
        </Carousel>
    );
};
