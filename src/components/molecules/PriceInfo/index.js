import React from 'react';
import styled from 'styled-components';

import BestPrice from '../../atoms/BestPrice';
import ListPrice from '../../atoms/ListPrice';
import Infor from '../../atoms/Infor';
import Button from '../../atoms/Button';

const PriceInfo = styled.div`
  .item {
    &__list-price {
    }
    &__best-price {
      margin: 10px 0;
    }
    &__info {
    }
  }
`;
const PriceInfoComponet = prop => {
  return (
    <PriceInfo className="price-info">
      <ListPrice
        className="item__list-price"
        listPrice="R$ 400,00"
        airlines="gol"
      />
      <BestPrice className="item__best-price">240,20</BestPrice>
      <Infor className="item__info">Teste</Infor>
    </PriceInfo>
  );
};

export default PriceInfoComponet;
