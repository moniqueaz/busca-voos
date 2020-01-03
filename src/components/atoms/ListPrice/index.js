import React from 'react';
import styled from 'styled-components';
import { device } from '../../../style/device';

const ListPrice = styled.div`
  color: #333;
  width: 100%;
  font-size: 14px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  /* text-decoration: line-through; */
  font-weight: 100;
  text-transform: uppercase;
  position: relative;

  @media (min-width: 1025px) {
    /* text-decoration: none; */
    font-weight: bold;
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 1px;
      background-color: #333;
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
      background-color: #333;
      transform: translateX(-50%);
    }
    @media (min-width: 1025px) {
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
