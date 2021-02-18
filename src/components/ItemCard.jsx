import React from 'react';
import styled from 'styled-components';

import { ReactComponent as StarIcon } from '../icons/mdi_stars.svg';
import Button from './Button';

const Card = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  border: 1px solid #E5E5E5;
  padding: 10px;
  width: 180px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #E5E5E5;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Highlight = styled.div`
  background: #FFD232;
  border: 1px solid #000000;
  border-radius: 3px;
  font-size: 8px;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  width: 55px;
  margin-top: 10px;
  > svg { margin-right: 5px; }
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-top: 10px;
`;

const Title = styled.h3`
  font-weight: normal;
  font-size: 12px;
  margin-top: 10px;
  color: #878787;
`;

const ItemCard = ({
  id,
  imageUrl,
  isHighlight,
  price,
  title,
}) => {
  return (
    <Card>
      <ImageWrapper>
        <img
          src={imageUrl}
          alt={title}
        />
      </ImageWrapper>

      {isHighlight &&
        <Highlight>
          <StarIcon />
          <span>Highlight</span>
        </Highlight>
      }

      <Price>{price}</Price>
      <Title>{title}</Title>
      <Button text="Lihat Detail" />
    </Card>
  );
};

export default ItemCard;