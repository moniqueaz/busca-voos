import React from 'react';
import styled from 'styled-components';

const Infor = styled.span`
  color: #333;
  width: 100%;
  font-size: 12px;
  font-family: sans-serif;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  font-weight: bold;

  &.orange {
    color: orange;
  }
`;
const InforComponet = prop => {
  return (
    <Infor className={prop.className}>
      {prop.children ? prop.children : ''}
    </Infor>
  );
};

export default InforComponet;
