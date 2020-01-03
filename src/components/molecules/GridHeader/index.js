import React from 'react';
import styled from 'styled-components';

const GridHeader = styled.div`
  background-color: #889395;
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  .button {
    width: auto;
    height: 100%;
    & + button {
      border-left: 1px solid #333;
    }
  }
`;
const GridHeaderComponet = prop => {
  return <GridHeader className="grid-header">{prop.children}</GridHeader>;
};

export default GridHeaderComponet;
