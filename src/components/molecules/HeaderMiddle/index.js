import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import DatePicker from 'react-datepicker';

import { device, colors, font } from '../../../style/variaveis';

import Label from '../../atoms/Label';

import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
} from 'react-icons/fa';

const HeaderMiddleContainer = styled.div.attrs(props => ({}))`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px;
  border-bottom: 2px solid ${colors.gray};
  width: 100%;
  position: absolute;
  left: 0;
  top: 130px;
  background-color: ${colors.white};
  display: block;

  ${props =>
    props.status === 'disabled' &&
    css`
      & {
        display: none;
      }
    `}

  @media ${device.laptop} {
    position: static;
    display: block;
    display: flex;
    border: 1px solid ${colors.grayLight};
    padding: 0;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  input {
    background-color: transparent;
    border: 1px solid ${colors.gray};
    width: 100%;
    padding: 10px;
    color: ${colors.primary};
    font-weight: bold;
    margin-bottom: 10px;
    font-family: ${font.family.primary};

    @media ${device.laptop} {
      border: 0;
      margin-bottom: 0;
      padding: 0;
      font-size: ${font.desktop.md}
    }

    @media ${device.laptopL} {
      font-size: ${font.desktop.lg}
    }

    &::placeholder {
      color: ${colors.grayLight};
    }
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    color: ${colors.primary};
    transform: translateY(-50%);
    @media ${device.laptop} {
      width: 25px;
      height: 25px;
    }
  }
`;
const Filter = styled.button`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  width: 100%;

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
const Submit = styled.div`
  flex: 0 0 16.666%;
  width: 100%;
  height: auto;
  text-align: right;
  padding: 20px;
  display: none;

  @media ${device.desktop.laptop} {
    display: block;
  }
  button {
    background-color: ${colors.primary};
    border-radius: 5px;

    @media ${device.laptop} {
      padding: 20px 10px;
    }

    @media ${device.laptopL} {
      padding: 20px 30px;
    }

    span {
      font-weight: bold;
      color: ${colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${colors.white};
        position: static;
        transform: none;
        margin-right: 5px;
        @media ${device.laptop} {
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;

const HeaderMiddle = _ => {
  const [from, setFrom] = useState('BHZ');
  const [to, setTo] = useState('SAO');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [arraivalDate, setArraivalDate] = useState(new Date());
  const [adult, setAdult] = useState(1);
  const [search, setSearch] = useState('disabled');

  function handleInputChange() {}

  function toggleSearch() {
    console.log('click');
    setSearch(search === 'disabled' ? 'enabled' : 'disabled');
    console.log(search);
    console.log(search === 'disabled');
  }

  return (
    <>
      <Filter type="button" onClick={toggleSearch}>
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
      <HeaderMiddleContainer status={search}>
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
        <Submit>
          <button>
            <span>
              <FaSearch />
              Pesquisar
            </span>
          </button>
        </Submit>
      </HeaderMiddleContainer>
    </>
  );
};

export default HeaderMiddle;
