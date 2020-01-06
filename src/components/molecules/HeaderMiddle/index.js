import React, { useState, useEffect } from 'react';
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
import { mount } from 'enzyme';

const HeaderMiddle = _ => {
  const flights = useSelector(state => state.flights);
  const from = 'BHZ';
  const to = 'SAO';
  const adults = 1;
  const [search, setSearch] = useState('disabled');
  const today = new Date();
  const [outboundDate, setOutboundDate] = useState(
    parseStringToDate('2020-05-01')
  );
  let [inboundDate, setInboundDate] = useState(parseStringToDate('2020-04-02'));

  const [postData, setPostData] = useState({
    tripType: 'RT',
    from, //origem
    to, //destino
    outboundDate: parseDateToString(outboundDate), //data de partida
    inboundDate: parseDateToString(inboundDate), //data de volta
    cabin: 'EC', //classe econômica (EC) ou executiva (EX)
    adults, //adultos
    children: 0, //crianças
    infants: 0, //bebês
  });

  const dispatch = useDispatch();

  useEffect(() => {}, []);
  useEffect(() => {
    async function fetchData() {
      await updateFlights();
    }
    fetchData();
  }, [postData]);

  function handlerMountToFlights(flights) {
    dispatch(MapDispachToActions.mountToFlights(flights));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setPostData({
      ...postData,
      [postData]: {
        outboundDate: parseDateToString(outboundDate), //data de partida
        inboundDate: parseDateToString(inboundDate), //data de volta
      },
    });
  }

  async function updateFlights() {
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

  function parseDateToString(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  function parseStringToDate(date) {
    let dt = date;

    const dataSplit = dt.split('-');

    const day = dataSplit[1];
    const month = dataSplit[2];
    const year = dataSplit[0];

    return new Date(year, month - 1, day);
  }

  function validationDate(date, type) {
    let tp = type === 'departureDate' ? 'Ida' : 'Volta';

    if (new Date(date).getTime() < today.getTime()) {
      alert(`Data de ${tp} menor que a data atual`);
      return;
    }
    if (type === 'departureDate') {
      if (date.getTime() > inboundDate.getTime()) {
        alert(`Data de Ida maior que a data de Volta`);
        return;
      }
    }
    if (type === 'arrivalDate') {
      if (outboundDate.getTime() > date.getTime()) {
        alert(`Data de Ida maior que a data de Volta`);
        return;
      }
    }

    type === 'departureDate' && setOutboundDate(date);
    type === 'arrivalDate' && setInboundDate(date);
  }

  function formatDateString(dateString) {
    let dataSplit = dateString.split('-');
    const day = dataSplit[2];
    const month = dataSplit[1];
    const year = dataSplit[0];
    return `${day}/${month}/${year}`;
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
            {formatDateString(parseDateToString(outboundDate))}
          </DateT>
          <DateT>
            <FaCalendarAlt />
            {formatDateString(parseDateToString(inboundDate))}
          </DateT>
        </Dates>
        <Adults>
          <FaUserFriends />
          {adults}
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
            selected={outboundDate}
            dateFormat="dd/MM/yyyy"
            onChange={date => validationDate(date, 'departureDate')}
          />
          <FaCalendarAlt />
        </Label>
        <Label text="Volta" from="volta">
          <DatePicker
            id="volta"
            selected={inboundDate}
            dateFormat="dd/MM/yyyy"
            onChange={date => validationDate(date, 'arrivalDate')}
          />
          <FaCalendarAlt />
        </Label>
        <Label text="Adulto" form="adult">
          <input
            type="text"
            placeholder="Adultos"
            value={adults}
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
