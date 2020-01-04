import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

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
const GridHeaderComponet = _ => {
  return (
    <GridHeader className="grid-header">
      <Button className="text white" arrow></Button>
      <Button className="text white" arrow>
        Button
      </Button>
      <Button className="text white" arrow>
        Button
      </Button>
    </GridHeader>
  );
};

export default GridHeaderComponet;
