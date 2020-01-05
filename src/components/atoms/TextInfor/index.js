import React from 'react';
import styled from 'styled-components';
import { device, colors, font } from '../../../style/variaveis';

const TextInfor = styled.span`
  color: ${colors.secondary};
  width: 100%;
  font-size: ${font.mobile.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  font-weight: 500;

  @media ${device.laptop} {
    text-transform: uppercase;
  }

  &.orange {
    color: ${colors.infor};
    font-weight: bold;
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
