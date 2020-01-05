import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import {
  Filter,
  HeaderMiddleContainer,
  Trip,
  Submit,
  Dates,
  DateT,
  Adults,
} from './style';

import Label from '../../atoms/Label';

import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
} from 'react-icons/fa';

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
