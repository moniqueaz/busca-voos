import React from 'react';
import styled from 'styled-components';
import ListPrice from '../../atoms/ListPrice';
import BestPrice from '../../atoms/BestPrice';
import TextInfor from '../../atoms/TextInfor';
import Button from '../../atoms/Button';
import Item from '../../atoms/Item';

// import PriceInfo from '../../molecules/Items';

const GridRow = styled.div`
  padding: 20px;
`;
const ItensCol = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;
const PriceInfo = styled.div`
  .item {
    &__list-price {
    }
    &__best-price {
      margin: 10px 0;
    }
    &__info {
      margin-bottom: 10px;
    }
  }
`;

const GridRowComponet = _ => {
  return (
    <GridRow>
      {/* loop */}
      <ItensCol>
        <Item airline="gol" infor="G3 9018" />
        <Item airline="gol" infor="G3 9018" />
        <Item airline="gol" infor="G3 9018" />
      </ItensCol>
      <PriceInfo>
        <ListPrice className="item__list-price" listPrice="20" airlines="gol" />
        <BestPrice className="item__best-price">10</BestPrice>
        <TextInfor className="item__info">Text</TextInfor>
        <Button className="ghost" plus></Button>
      </PriceInfo>
    </GridRow>
  );
};

export default GridRowComponet;
