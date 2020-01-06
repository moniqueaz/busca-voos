import React, { useEffect } from 'react';
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

  @media ${device.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Details = styled.div`
  /* padding: 15px 0; */
  height: 40px;
  @media ${device.laptop} {
    order: -1;
  }
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
  @media ${device.laptop} {
    border: 0;
  }
`;
const PriceInfo = styled.div`
  @media ${device.laptop} {
    flex: 1 1 33.333%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
    airline,
    bestPriceAt,
    airlineName,
    savingPercentage,
    mmBestPriceAt,
  } = pricing;

  const bta = bestPriceAt === 'ota' || bestPriceAt === 'miles' ? true : false;

  // Exclusivo na MaxMilhas
  // Na AZUL R$ 143,49
  // Na LATAM R$ 141,69

  useEffect(() => {
    // pricing[mmBestPriceAt];
    // console.log('pricing[mmBestPriceAt]: ', pricing[mmBestPriceAt]);
    // console.log('mmBestPriceAt: ', mmBestPriceAt);
  }, []);

  return (
    <GridRow>
      {/* loop */}
      <ItensCol trip={flight} />
      <PriceInfo>
        <Prices>
          <ListPrice
            className="item__list-price"
            listPrice={bta && airline && airline.saleTotal}
            airlines={bta && airline && airlineName}
          />
          <BestPrice className="item__best-price">
            {pricing[mmBestPriceAt]
              ? pricing[mmBestPriceAt].saleTotal
              : pricing[bestPriceAt].saleTotal}
          </BestPrice>
          <TextInfor
            className={bta && airline ? 'item__info orange' : 'item__info'}
          >
            {savingPercentage
              ? `Economize ${Math.round(savingPercentage)}% na MaxMilhas`
              : `${
                  !airline
                    ? 'Exclusivo na MaxMilhas'
                    : `Menor preço na ${bta ? 'MaxMilhas' : 'Cia Aéria'}`
                }`}
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
