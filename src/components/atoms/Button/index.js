import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: green;
  border-radius: 10px;
  color: white;
  width: 100%;
  border: 0;
  height: 40px;
  font-size: 18px;
`;
const ButtonDefault = prop => {
  return <Button type="button">{prop.children}</Button>;
};

export default ButtonDefault;
