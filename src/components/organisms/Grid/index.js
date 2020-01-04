import React from 'react';
import styled from 'styled-components';
import GridHeader from '../../molecules/GridHeader';
import GridRow from '../../molecules/GridRow';

const Grid = styled.div``;

const GridComponet = _ => {
  return (
    <>
      <Grid>
        <GridHeader />
        {/* loop */}
        <GridRow />
        <GridRow />
      </Grid>
    </>
  );
};

export default GridComponet;
