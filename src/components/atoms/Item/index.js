import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  display: inline-block;
  /* list-style: none; */
  color: #333;
  font-family: sans-serif;
  flex: 1 1 auto;
  text-align: center;
  padding: 5px;
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
