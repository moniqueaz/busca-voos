import React from 'react';
import styled from 'styled-components';

import { device, colors, font } from '../../../style/variaveis';

const ListPrice = styled.div`
  color: ${colors.secondary};
  width: 100%;
  font-size: ${font.mobile.md};
  display: flex;
  align-items: center;
  justify-content: center;

  /* text-decoration: line-through; */
  font-weight: 500;
  text-transform: uppercase;
  position: relative;

  @media ${device.laptop} {
    /* text-decoration: none; */
    font-weight: bold;
    &:after {
      display: none;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1px;
      background-color: ${colors.secondary};
      transform: translateX(-50%);
    }
  }

  span {
    font-weight: bold;
    margin-left: 5px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1px;
      background-color: ${colors.secondary};
      transform: translateX(-50%);
    }
    @media ${device.laptop} {
      /* text-decoration: line-through; */
      &:after {
        display: none;
      }
    }
  }
`;
const ListPriceComponet = ({ airlines, listPrice, className }) => {
  return (
    <ListPrice className={className}>
      {airlines}
      <span>{listPrice}</span>
    </ListPrice>
  );
};

export default ListPriceComponet;
