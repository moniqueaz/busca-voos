import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import { device, colors, font } from '../../../style/variaveis';

import Label from '../../atoms/Label';

import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
} from 'react-icons/fa';

const HeaderMiddleContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px;
  border-bottom: 2px solid ${colors.gray};

  @media ${device.laptop} {
    display: none;
  }

  input {
    background-color: transparent;
    border: 0;
  }
`;
const Filter = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;

  @media ${device.laptop} {
    display: none;
  }

  svg {
    color: ${colors.primary};
  }
`;
const Trip = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: bold;
    font-size: ${font.mobile.ms};
  }
  svg {
    margin-right: 5px;
  }
`;
const Dates = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border: 1px solid ${colors.gray};
  border-top: 0;
  border-bottom: 0;
`;
const DateT = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: ${font.mobile.sm};
  & + div {
    padding-left: 10px;
  }
  svg {
    margin-right: 5px;
  }
`;
const Adults = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: ${font.mobile.sm};
  svg {
    margin-right: 5px;
  }
`;

const HeaderMiddle = _ => {
  const [from, setFrom] = useState('BHZ');
  const [to, setTo] = useState('SAO');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arraivalDate, setArraivalDate] = useState(new Date());
  const [adult, setAdult] = useState(1);

  function handleInputChange() {}

  return (
    <>
      <Filter>
        <Trip>
          <FaMapMarkerAlt />
          <span>
            {from}-{to}
          </span>
        </Trip>
        <Dates>
          <DateT>
            <FaCalendarAlt />
            {`
            ${departureDate.getDate()}
            ${departureDate.getMonth()}
            ${departureDate.getFullYear()}
            `}
          </DateT>
          <DateT>
            <FaCalendarAlt />
            {`
            ${arraivalDate.getDate()}
            ${arraivalDate.getMonth()}
            ${arraivalDate.getFullYear()}
            `}
          </DateT>
        </Dates>
        <Adults>
          <FaUserFriends />
          {adult}
        </Adults>
      </Filter>
      <HeaderMiddleContainer>
        <Label text="Sair de" form="from">
          <input
            text="Sair de:"
            type="text"
            placeholder="Sair de"
            value={from}
            onChange={() => handleInputChange()}
            id="from"
            disabled
          />
          <FaMapMarkerAlt />
        </Label>
        <Label text="Ir para" form="to">
          <input
            text="Ir para:"
            type="text"
            placeholder="Ir para"
            value={to}
            onChange={() => handleInputChange()}
            id="to"
            disabled
          />
          <FaMapMarkerAlt />
        </Label>
        <Label text="Ida" form="ida">
          <DatePicker
            id="ida"
            selected={departureDate}
            onChange={date => setDepartureDate(date)}
          />
          <FaCalendarAlt />
        </Label>
        <Label text="Volta" from="volta">
          <DatePicker
            id="volta"
            selected={arraivalDate}
            onChange={date => setArraivalDate(date)}
          />
          <FaCalendarAlt />
        </Label>
        <Label text="Adulto" form="adult">
          <input
            type="text"
            placeholder="Adultos"
            value={adult}
            onChange={handleInputChange}
            id="adult"
            disabled
          />
          <FaUserFriends />
        </Label>
      </HeaderMiddleContainer>
    </>
  );
};

export default HeaderMiddle;
