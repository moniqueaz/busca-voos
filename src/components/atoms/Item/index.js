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
  span {
    font-weight: bold;
    display: block;
    text-transform: uppercase;
  }
`;
const ItemComponet = ({ airline, infor }) => {
  return (
    <Item>
      <span>{airline}</span>
      {infor}
    </Item>
  );
};

export default ItemComponet;
