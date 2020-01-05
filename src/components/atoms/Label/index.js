import React from 'react';
import styled from 'styled-components';
import { device, colors, font } from '../../../style/variaveis';

const LabelContainer = styled.div`
  label {
    display: none;

    @media ${device.laptop} {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: ${font.desktop.sm};
    }
  }
`;

const Label = ({ text, form, children }) => {
  return (
    <LabelContainer>
      <label htmlFor={form}>{text}</label>
      {children}
    </LabelContainer>
  );
};

export default Label;
