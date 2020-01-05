import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { FaPlus } from 'react-icons/fa';

import { device, colors, font } from '../../../style/variaveis';

import ListPrice from '../../atoms/ListPrice';
import BestPrice from '../../atoms/BestPrice';
import TextInfor from '../../atoms/TextInfor';
import Button from '../../atoms/Button';

import ItensCol from '../../molecules/ItensCol';

// import PriceInfo from '../../molecules/Items';

const GridRow = styled.div`
  padding: 0 10px;
  margin-bottom: 5px;
  background-color: ${colors.white};
`;
const Details = styled.div`
  /* padding: 15px 0; */
  height: 40px;
`;
const DetailsButton = styled.button`
  width: 100%;
  border: 0;
  font-size: ${font.mobile.sm};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  background-color: transparent;
  text-transform: uppercase;
  height: 100%;
  @media ${device.laptop} {
    border-radius: 5px;
    height: 40px;
    border: 1px solid ${colors.secondary};
  }
  svg {
    color: ${colors.primary};
  }
`;
const DetailsInfor = styled.div`
  display: none;
`;
const Prices = styled.div`
  border: 1px dashed ${colors.grayLight};
  padding: 10px 0;
  border-left: 0;
  border-right: 0;
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

function formatDate(date) {
  let dt = new Date(date);
  return `${dt.getUTCHours()}:${d.getUTCMinutes()}`;
}

const GridRowComponet = ({ flight }) => {
  const { pricing, trips } = flight;

  const {
    ota,
    miles,
    airline: airlinePrice,
    bestPriceAt,
    airlineName,
  } = pricing;

  return (
    <GridRow>
      {/* loop */}
      <ItensCol trip={flight} />
      <PriceInfo>
        <Prices>
          <ListPrice
            className="item__list-price"
            listPrice="20"
            airlines="gol"
          />
          <BestPrice className="item__best-price">10</BestPrice>
          <TextInfor className="item__info">
            Economize 42% na MaxMilhas
          </TextInfor>
        </Prices>
        <Details>
          <DetailsButton className="ghost">
            <FaPlus />
            Detalhes do Voo
          </DetailsButton>
          <DetailsInfor>
            {trips.map((trip, index) => {
              return <ItensCol key={index} trip={trip} />;
            })}
          </DetailsInfor>
        </Details>
      </PriceInfo>
    </GridRow>
  );
};

export default GridRowComponet;
