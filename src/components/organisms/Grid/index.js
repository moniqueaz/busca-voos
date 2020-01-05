import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as MapDispachToActions from '../../../store/actions/actionCreators';

import styled from 'styled-components';
import GridHeader from '../../molecules/GridHeader';
import GridRow from '../../molecules/GridRow';
import vooGolMock from '../../../services/mock-gol.json';
import vooAzulMock from '../../../services/mock-azul.json';
import vooLatamMock from '../../../services/mock-latan.json';

const Grid = styled.div``;

const GridComponet = _ => {
  // mockGol
  const flights = useSelector(state => state.flights);
  const dispatch = useDispatch();

  function handlerMountToFlights() {
    dispatch(MapDispachToActions.mountToFlights(flights));
  }

  //didUpdate
  useEffect(() => {
    console.log('flights: ', flights);
  }, [flights]);

  //didMount
  useEffect(() => {}, []);

  // willAmount
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <button onClick={handlerMountToFlights}>Teste</button>
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
