import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';

import api from '../../../services/api';
import { TOKEN } from '../../../services/auth';

import { Search } from './style';

import airlinesMock from '../../../services/mock.json';
import vooGolMock from '../../../services/mock-gol.json';
import vooAzulMock from '../../../services/mock-azul.json';
import vooLatamMock from '../../../services/mock-latan.json';

import {
  FaSearch,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserFriends,
} from 'react-icons/fa';

const FilterComponet = () => {
  const [sairDe, setSairDe] = useState('');
  const [irPara, setIrPara] = useState('');
  const [adultos, setAdultos] = useState('');
  const [dataIda, setDataIda] = useState('');
  const [dataVolta, setDataVolta] = useState('');
  const flights = useSelector(state => state.flights);
  const [airlines, setAirlines] = useState([]);

  flights = {
    flag: 'outbound',
    order: 'price',
    outbound: [],
    inbound: [],
  };

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

  function handleInputChange(e) {
    // set(e.target.value);
  }

  function handlerMountToFlights(flights) {
    dispatch(MapDispachToActions.mountToFlights(flights));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let { airlines, id } = await getAirlines();
    let airlinesEnabled = airlinesStatusEnables(airlines);
    let result = await getFlights(id, airlinesEnabled);

    outbound = result.map(rl => rl.outbound);

    inbound = result.map(rl => rl.inbound);

    let state = {
      flag: 'outbound',
      order: 'price',
      outbound: outbound,
      inbound: inbound,
    };
    // setFlights({ ...flights, state });

    console.log('flights: ', flights);

    // handlerMountToVoos('voo2');
  }

  async function getFlights(id, airlinesEnabled) {
    const trips = [];
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
          trips.push(mock(count));
          // return error;
        });
    }
    return trips;
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

  return (
    <Search onSubmit={handleSubmit}>
      <div className="search__input">
        <label htmlFor="sairde">Sair de:</label>
        <input
          text="Sair de:"
          type="text"
          placeholder="Sair de"
          value={sairDe}
          onChange={handleInputChange}
          id="sairde"
        />
        <FaMapMarkerAlt />
      </div>
      <div className="search__input">
        <label htmlFor="irpara">Ir para:</label>
        <input
          type="text"
          placeholder="Ir para"
          value={irPara}
          onChange={handleInputChange}
          id="irpara"
        />
        <FaMapMarkerAlt />
      </div>
      <div className="search__input">
        <label htmlFor="dataIda">Data ida:</label>
        <input
          type="text"
          placeholder="Data ida"
          value={dataIda}
          onChange={handleInputChange}
          id="dataIda"
        />
        <FaCalendarAlt />
      </div>
      <div className="search__input">
        <label htmlFor="dataVolta">Data volta:</label>
        <input
          type="text"
          placeholder="Data volta"
          value={dataVolta}
          onChange={handleInputChange}
          id="dataVolta"
        />
        <FaCalendarAlt />
      </div>
      <div className="search__input">
        <label htmlFor="adulto">Adultos</label>
        <input
          type="text"
          placeholder="Adultos"
          value={adultos}
          onChange={handleInputChange}
          id="adulto"
        />
        <FaUserFriends />
      </div>
      <button type="submit">
        <FaSearch />
        Pesquisar
      </button>
    </Search>
  );
};

export default FilterComponet;
