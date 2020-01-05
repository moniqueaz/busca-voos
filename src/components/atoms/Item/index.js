import React from 'react';
import styled from 'styled-components';
import { font, colors } from '../../../style/variaveis';

const Item = styled.li`
  display: inline-block;
  /* list-style: none; */
  color: ${colors.secondary};
  flex: 1 1 auto;
  text-align: center;
  padding: 5px;
  font-size: ${font.mobile.sm};
  text-transform: uppercase;
  span {
    font-weight: bold;
    display: block;
    text-transform: uppercase;
  }
`;
const ItemComponet = ({ data_1, data_2 }) => {
  return (
    <Item>
      <span>{data_1}</span>
      {data_2}
    </Item>
  );
};

export default ItemComponet;
