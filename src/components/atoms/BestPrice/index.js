import React from 'react';
import styled from 'styled-components';

import { device, colors, font } from '../../../style/variaveis';

const BestPrice = styled.button`
  background-color: ${colors.primary};
  border-radius: 5px;
  color: white;
  width: 100%;
  border: 0;
  height: 40px;
  font-size: ${font.mobile.md};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`;
const BestPriceComponet = prop => {
  return (
    <BestPrice type="button" className={prop.className}>
      {prop.children ? `R$ ${prop.children}` : 'R$ 0'}
    </BestPrice>
  );
};

export default BestPriceComponet;
