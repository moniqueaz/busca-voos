import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GridHeader from '../../molecules/GridHeader';
import GridRow from '../../molecules/GridRow';
import vooGolMock from '../../../services/mock-gol.json';
import vooAzulMock from '../../../services/mock-azul.json';
import vooLatamMock from '../../../services/mock-latan.json';

const Grid = styled.div``;

const GridComponet = _ => {
  // mockGol
  const [flights, setFlights] = useState({});

  //didUpdate
  useEffect(() => {}, [flights]);

  //didMount
  useEffect(() => {}, []);

  // willAmount
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Grid>
        {/* <GridHeader /> */}
        {/* loop */}
        <GridRow />
        <GridRow />
      </Grid>
    </>
  );
};

export default GridComponet;
