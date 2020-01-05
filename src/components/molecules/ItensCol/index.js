import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import styled, { keyframes, css } from 'styled-components';

import { device, colors, font } from '../../../style/variaveis';

import Item from '../../atoms/Item';

import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
} from 'react-icons/fa';

const ItensColContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  padding: 10px 0;
`;

const ItensCol = ({ trip }) => {
  const {
    airline,
    from,
    to,
    flightNumber,
    departureDate,
    arrivalDate,
    duration,
    stops,
  } = trip;

  let departure = new Date(departureDate);
  let arrival = new Date(arrivalDate);

  return (
    <ItensColContainer>
      <Item data_1={airline} data_2={flightNumber} />
      <Item
        data_1={`${departure.getHours()}:${departure.getMinutes()}`}
        data_2={from}
      />
      <Item
        data_1={`${Math.floor(duration / 60)} : ${duration % 60}h`}
        data_2={
          !stops
            ? 'voo direto'
            : stops > 1
            ? `${stops} paradas`
            : `${stops} parada`
        }
      />
      <Item
        data_1={`${arrival.getHours()}:${arrival.getMinutes()}`}
        data_2={to}
      />
    </ItensColContainer>
  );
};

export default ItensCol;
