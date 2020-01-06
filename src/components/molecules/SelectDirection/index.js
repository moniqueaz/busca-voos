import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import styled, { keyframes, css } from 'styled-components';

import { device, colors, font } from '../../../style/variaveis';

const SelectDirectionContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.grayLight};
  background-color: ${colors.white};

  button {
    border-bottom: 2px solid ${colors.grayLight};
    flex: 1 1 50%;
    padding: 15px 10px;
    font-weight: bold;
    font-size: ${font.mobile.sm};
    & + button {
      border-left: 1px solid ${colors.grayLight};
    }

    &.active {
      border-bottom: 3px solid ${colors.primary};
    }
  }
`;

const SelectDirection = _ => {
  const [direction, setDirection] = useState('outbound');
  const { flights } = useSelector(state => state.flights);
  const dispatch = useDispatch();

  function setSelectDirection(status) {
    setDirection(status);
  }

  function handlerMountToFlights(flights) {
    dispatch(MapDispachToActions.mountToFlights(flights));
  }
  useEffect(() => {
    console.log('direction: ', direction);
    handlerMountToFlights({ ...flights, ['flag']: direction });
  }, [direction]);

  return (
    <SelectDirectionContainer>
      <button
        onClick={() => {
          setSelectDirection('outbound');
        }}
        className={direction === 'outbound' ? 'active' : ''}
      >
        Selecione sua ida
      </button>
      <button
        onClick={() => {
          setSelectDirection('inbound');
        }}
        className={direction === 'inbound' ? 'active' : ''}
      >
        Selecionei sua volta
      </button>
    </SelectDirectionContainer>
  );
};

export default SelectDirection;
