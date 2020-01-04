import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

const GridHeader = styled.ul`
  background-color: #889395;
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  li {
    width: auto;
    height: 100%;
    border: 1px solid #7b8688;
    & + li {
      border-left: 1px solid #7b8688;
    }
  }
  button {
    width: auto;
    height: 100%;
    color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    svg {
      color: #159177;
      margin-left: 10px;
    }
  }
`;

const Button = styled.button``;

const GridHeaderComponet = _ => {
  return (
    <GridHeader className="grid-header">
      <li>
        <button>Cia Aérea</button>
      </li>
      <li>
        <button>
          Partida
          <FaChevronDown />
        </button>
      </li>
      <li>
        <button>
          Duração
          <FaChevronDown />
        </button>
      </li>
      <li>
        <button>
          Chegada
          <FaChevronDown />
        </button>
      </li>
    </GridHeader>
  );
};

export default GridHeaderComponet;
