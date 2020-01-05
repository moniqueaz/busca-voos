import React from 'react';
import styled from 'styled-components';
import { device, colors, font } from '../../../style/variaveis';

const LabelContainer = styled.div`
  position: relative;
  @media ${device.laptop} {
    flex: 0 0 16.666%;
    padding: 10px 20px;

    & + div {
      border-left: 1px solid ${colors.grayLight};
    }
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: ${font.desktop.sm};
    font-family: ${font.family.secondary};
    font-style: italic;
    margin-bottom: 5px;
    @media ${device.laptop} {
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
