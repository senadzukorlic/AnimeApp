import styled from "styled-components"

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: auto; /* Maksimalna širina carousela */
  height: 250px; /* Visina carousela */
  margin: 0; /* Centriranje carousela */
  overflow: hidden; /* Sakrij deo sadržaja van vidokruga */
  border-radius: 8px; /* Zaobljeni uglovi */
`

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
`

export const CarouselItem = styled.div`
  flex: 0 0 100%; /* Svaka slika zauzima celu širinu carousela */
  height: 100%; /* Visina stavke */
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Lagano uvećanje pri hover-u */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Senka pri hover-u */
  }
`

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;

  ${CarouselItem}:hover & {
    filter: brightness(0.5); /* Smanjenje osvetljenosti pri hover-u */
  }
`

export const Title = styled.h1`
  position: absolute;
  bottom: 60px;
  left: 20px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${CarouselItem}:hover & {
    opacity: 1; /* Prikazivanje naslova pri hover-u */
  }
`

export const Subtitle = styled.h2`
  position: absolute;
  bottom: 60px;
  left: 20px;
  color: white;
  font-size: 18px;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${CarouselItem}:hover & {
    opacity: 1; /* Prikazivanje podnaslova pri hover-u */
  }
`

export const Rating = styled.h2`
  position: absolute;
  bottom: 100px;
  left: 20px;
  color: white;
  font-size: 18px;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${CarouselItem}:hover & {
    opacity: 1; /* Prikazivanje ocene pri hover-u */
  }
`

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1; /* Da bude iznad slike */
`

export const Indicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "white" : "gray")};
  cursor: pointer;
  transition: background-color 0.3s ease;
`

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 2; /* Da bude iznad slike */
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &.left {
    left: 20px; /* Pozicija leva strelica bliže slici */
  }

  &.right {
    right: 20px; /* Pozicija desna strelica bliže slici */
  }
`
