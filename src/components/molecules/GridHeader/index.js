import React from 'react';
import styled, { keyframes, css } from 'styled-components';

import { FaChevronDown } from 'react-icons/fa';

import { device, colors, font } from '../../../style/variaveis';

const GridHeader = styled.ul`
  background-color: ${colors.secondary};
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid ${colors.grayLight};
  li {
    width: auto;
    height: 100%;
    padding: 10px;
    flex: 1 1 25%;
    text-align: center;
    & + li {
      border-left: 1px solid ${colors.grayLight};
    }
  }
  button {
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: ${font.mobile.sm};
    width: 100%;
    height: 100%;
    text-align: center;
    svg {
      color: ${colors.primary};
      margin-left: 10px;
      display: none;

      @media ${device.laptop} {
        display: inline-block;
      }
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
