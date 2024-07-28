// Carousel.jsx
import React, { useState, useEffect } from 'react';
import { fetchTrendingAnime } from "../../API/Request";
import { CarouselContainer, CarouselWrapper, CarouselItem, CarouselImage, Title, Subtitle, Rating, IndicatorContainer, Indicator, ArrowButton } from './CarouselStyled';

export function Carousel() {
  const [trendingImg, setTrendingImg] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetchTrendingAnime();
      setTrendingImg(response.data);
    };
    fetchImage();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingImg.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trendingImg.length) % trendingImg.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {trendingImg.slice(0, 5).map((el) => (
          <CarouselItem key={el.id}>
            <CarouselImage src={el.attributes.coverImage.large} alt={`Trending Anime ${el.id}`} />
            <Title>{el.attributes.title}</Title>
            <Subtitle>Episodes: {el.attributes.episodes}</Subtitle>
            <Rating>Rating: {el.attributes.rating}</Rating>
          </CarouselItem>
        ))}
      </CarouselWrapper>
      <IndicatorContainer>
        {trendingImg.slice(0, 5).map((_, index) => (
          <Indicator
            key={index}
            active={index === currentIndex}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </IndicatorContainer>
      <ArrowButton className="left" onClick={handlePrev}>&lt;</ArrowButton>
      <ArrowButton className="right" onClick={handleNext}>&gt;</ArrowButton>
    </CarouselContainer>
  );
}
