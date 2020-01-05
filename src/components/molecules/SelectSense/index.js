import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';
import styled, { keyframes, css } from 'styled-components';

import { device, colors, font } from '../../../style/variaveis';

const SelectSenseContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${colors.grayLight};

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

const SelectSense = _ => {
  const [sense, setSense] = useState('outbound');

  function setSelectSense(status) {
    setSense(status);
  }
  return (
    <SelectSenseContainer>
      <button
        onClick={() => {
          setSelectSense('outbound');
        }}
        className={sense === 'outbound' ? 'active' : ''}
      >
        Selecione sua ida
      </button>
      <button
        onClick={() => {
          setSelectSense('inbound');
        }}
        className={sense === 'inbound' ? 'active' : ''}
      >
        Selecionei sua volta
      </button>
    </SelectSenseContainer>
  );
};

export default SelectSense;
