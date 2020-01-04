import React from 'react';
import styled from 'styled-components';
import Filter from '../../molecules/Filter';
import Milhas from '../../molecules/Milhas';

const Bottom = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  position: fixed;
  bottom: 0;

  div {
    & + div {
      border-left: 1px solid #ccc;
    }
  }
`;

const BottomComponet = _ => {
  return (
    <Bottom>
      <Filter />
      <Milhas />
    </Bottom>
  );
};

export default BottomComponet;
