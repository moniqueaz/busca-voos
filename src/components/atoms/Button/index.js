import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #159177;
  border-radius: 5px;
  color: white;
  width: 100%;
  border: 0;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
  }

  &.ghost {
    color: #333;
    background-color: transparent;
    border: 1px solid #333;
    text-transform: uppercase;
    svg {
      color: #159177;
    }
  }

  &.text {
    background-color: transparent;
    border: 0;
    color: #333;
    border-radius: 0;

    &.white {
      color: #fff;
    }
    &.black {
      color: #000;
    }
    svg {
      color: #159177;
      margin-right: 0;
      margin-left: 10px;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
const ButtonComponent = prop => {
  return (
    <Button
      type="button"
      className={prop.className ? `button ${prop.className}` : 'button'}
    >
      {prop.children ? prop.children : 'Button'}
    </Button>
  );
};

export default ButtonComponent;
