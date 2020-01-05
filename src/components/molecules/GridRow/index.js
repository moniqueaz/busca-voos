import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { FaPlus } from 'react-icons/fa';

import { device, colors, font } from '../../../style/variaveis';

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
        <Item data_1="gol" data_2="G3 9018" />
        <Item data_1="06:55" data_2="cnf" />
        <Item data_1="1h55" data_2="voo direto" />
        <Item data_1="06:55" data_2="gig" />
      </ItensCol>
      <PriceInfo>
        <ListPrice className="item__list-price" listPrice="20" airlines="gol" />
        <BestPrice className="item__best-price">10</BestPrice>
        <TextInfor className="item__info">Economize 42% na MaxMilhas</TextInfor>
        <Button className="ghost">
          <FaPlus />
          Detalhes do Voo
        </Button>
      </PriceInfo>
    </GridRow>
  );
};

export default GridRowComponet;
