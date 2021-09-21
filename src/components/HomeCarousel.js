
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import React, { useState } from 'react';
import {items} from '../shared/HomeCarouselItems';


const HomeCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    // when clicking right arrow moves to next image in carousel
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    //when clicking left arrow moves to previous image
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    //when clicking indicator goes to image at that index in the carousel
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    // mapping carousel items from HomeCarouselItems.js
    const slides = items.map((item) => {
      return (
        <CarouselItem className="w- rounded-0"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img className="img-fluid" src={item.src} alt={item.altText} />
          <CarouselCaption className="blah" captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel className="w-75 "
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default HomeCarousel;