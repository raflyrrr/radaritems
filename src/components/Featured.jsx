import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import Title from "./Title";
import ItemCard from "./ItemCard";

const FeaturedWrapper = styled.div`
  background-color: #fff;
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
`;

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  > * {
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const leftToRight = keyframes`
  from {
    left: -5%;
    opacity: 0.8;
  }
  to {
    left: 105%;
    opacity: 0.2;
  }
`;

const CardLoading = styled.div`
  background-color: #F4F4F4;
  position: relative;
  height: 260px;
  margin-top: 20px;
  border-radius: 5px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    background-color: #FFF;
    filter: blur(20px);
    width: 50px;
    height: 800px;
    transform: translateY(-50%) rotate(25deg);
    animation: ${leftToRight} 2.5s ease-out infinite;
  }
`;

const Featured = () => {
  const [items, setitems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/featured")
      .then((response) => response.json())
      .then((data) => {
        setitems(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <FeaturedWrapper>
      <Title text="Mobil Bekas Terbaru" />

      {isLoading ? (
        <CardLoading/>
      ) : (
        <ItemWrapper>
          {items.map((item) => (
            <ItemCard
              id={item.id}
              imageUrl={item.imageUrl}
              isHighlight={item.isHighlight}
              price={item.price}
              title={item.title}
            />
          ))}
        </ItemWrapper>
      )}
    </FeaturedWrapper>
  );
};

export default Featured;
