import React, { useState } from 'react';
import styled from 'styled-components';

import api from '../../../services/api';
import { TOKEN } from '../../../services/auth';

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

const Search = styled.form`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 50px;

  label {
    color: #ccc;
  }
  input {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 3px;
    padding: 5px 10px;
    color: #333;
    text-transform: uppercase;
    flex: 1 1 50%;
    border-radius: 0;

    &::placeholder {
      color: #ccc;
      text-transform: uppercase;
    }
  }

  button {
    height: 100%;
    flex: 1 1 50%;
  }

  .search {
    &__input {
      flex: 1 1 50%;
      position: relative;
      border: 1px solid #ccc;
      svg {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateX(-50%);
        color: #159177;
      }
    }
  }
`;

const FilterComponet = _ => {
  const [sairDe, setSairDe] = useState('');
  const [irPara, setIrPara] = useState('');
  const [adultos, setAdultos] = useState('');
  const [dataIda, setDataIda] = useState('');
  const [dataVolta, setDataVolta] = useState('');

  function handleInputChange(e) {
    // set(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let { airlines } = await getAirlines();

    let airlinesEnabled = airlinesStatusEnables(airlines);
    console.log('airlinesEnabled: ', airlinesEnabled);

    // for (let airline of enableAirlines) {
  }

  async function getAirlines() {
    const postData = {
      tripType: 'RT',
      from: 'BHZ', //origem
      to: 'SAO', //destino
      outboundDate: '2020-02-01', //data de partida
      inboundDate: '2020-02-02', //data de volta
      cabin: 'EC', //classe econômica (EC) ou executiva (EX)
      adults: 1, //adultos
      children: 0, //crianças
      infants: 0, //bebês
    };

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

  function mountListAirlines(airlines) {}

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
