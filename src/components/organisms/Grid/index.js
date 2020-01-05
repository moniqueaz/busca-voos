import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as MapDispachToActions from '../../../store/actions/actionCreators';

import { device, colors, font } from '../../../style/variaveis';

import GridHeader from '../../molecules/GridHeader';
import GridRow from '../../molecules/GridRow';
import vooGolMock from '../../../services/mock-gol.json';
import vooAzulMock from '../../../services/mock-azul.json';
import vooLatamMock from '../../../services/mock-latan.json';

const Grid = styled.div`
  margin: 20px;
`;

const GridComponet = _ => {
  // mockGol
  const { flights } = useSelector(state => state.flights);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState('true');

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

  return flights[flights.flag].length ? (
    <>
      <Grid>
        <GridHeader />
        {flights[flights.flag].map(flight => {
          return <GridRow key={flight.id} flight={flight} />;
        })}
      </Grid>
    </>
  ) : (
    <>
      <Grid>
        <GridHeader />
      </Grid>
    </>
  );
};

export default GridComponet;
