import React from 'react';
import styled from 'styled-components';

const TextInfor = styled.span`
  color: #333;
  width: 100%;
  font-size: 12px;
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
const TextInforComponet = prop => {
  return (
    <TextInfor className={prop.className}>
      {prop.children ? prop.children : ''}
    </TextInfor>
  );
};

export default TextInforComponet;
