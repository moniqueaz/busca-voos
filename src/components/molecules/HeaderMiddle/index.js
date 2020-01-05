import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import DatePicker from 'react-datepicker';

import api from '../../../services/api';
import { TOKEN } from '../../../services/auth';
import Label from '../../atoms/Label';

import airlinesMock from '../../../services/mock.json';
import vooGolMock from '../../../services/mock-gol.json';
import vooAzulMock from '../../../services/mock-azul.json';
import vooLatamMock from '../../../services/mock-latan.json';

import {
  Filter,
  HeaderMiddleContainer,
  Trip,
  Submit,
  Dates,
  DateT,
  Adults,
} from './style';

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
  const [arrivalDate, setArraivalDate] = useState(new Date());
  const [adult, setAdult] = useState(1);
  const [search, setSearch] = useState('disabled');
  const flights = useSelector(state => state.flights);

  const [postData, setPostData] = useState({
    tripType: 'RT',
    from: 'BHZ', //origem
    to: 'SAO', //destino
    outboundDate: '2020-02-01', //data de partida
    inboundDate: '2020-02-02', //data de volta
    cabin: 'EC', //classe econômica (EC) ou executiva (EX)
    adults: 1, //adultos
    children: 0, //crianças
    infants: 0, //bebês
  });

  const dispatch = useDispatch();

  function handlerMountToFlights(flights) {
    dispatch(MapDispachToActions.mountToFlights(flights));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let { airlines, id } = await getAirlines();
    let airlinesEnabled = airlinesStatusEnables(airlines);
    let result = await getFlights(id, airlinesEnabled);

    let outbound = reduceArray(result, 'outbound');

    let inbound = reduceArray(result, 'inbound');

    let stateFlights = {
      flag: 'outbound',
      order: 'price',
      outbound: outbound,
      inbound: inbound,
    };

    handlerMountToFlights(stateFlights);
  }

  function reduceArray(array, direction) {
    return array
      .map(rl => rl[direction])
      .reduce(
        (acumulador, valorAtual) =>
          (acumulador = [...acumulador, ...valorAtual]),
        []
      );
  }

  async function getFlights(id, airlinesEnabled) {
    const flight = [];
    let count = 0;
    for (let airline of airlinesEnabled) {
      await api
        .get(`/search/${id}/flights?airline=${airline.label}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Authorization',
            'Access-Control-Allow-Methods':
              'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log('response: ', response);
          // return response;
        })
        .catch(error => {
          count += 1;
          flight.push(mock(count));
          // return error;
        });
    }
    return flight;
  }

  function mock(count) {
    if (count === 1) {
      return vooGolMock;
    } else if (count === 2) {
      return vooAzulMock;
    } else if (count === 3) {
      return vooLatamMock;
    } else {
      return {};
    }
  }

  async function getAirlines() {
    return await api
      .post(`search?time=${Date.now()}`, postData, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Authorization',
          'Access-Control-Allow-Methods':
            'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('response: ', response);
        return response;
      })
      .catch(error => {
        console.log('error: ', airlinesMock);

        return airlinesMock;
        return error;
      });
  }

  function airlinesStatusEnables(airlines, status = true) {
    return airlines.filter(airline => airline.status.enable === status);
  }

  function handleInputChange() {}

  function toggleSearch() {
    setSearch(search === 'disabled' ? 'enabled' : 'disabled');
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
            ${arrivalDate.getDate()}
            ${arrivalDate.getMonth()}
            ${arrivalDate.getFullYear()}
            `}
          </DateT>
        </Dates>
        <Adults>
          <FaUserFriends />
          {adult}
        </Adults>
      </Filter>
      <HeaderMiddleContainer onSubmit={handleSubmit} status={search}>
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
            selected={arrivalDate}
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
          <button type="submit">
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
