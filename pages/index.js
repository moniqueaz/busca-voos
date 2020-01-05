import styled from 'styled-components';
import Layout from '../src/components/Layout';

import { device, colors, font } from '../src/style/variaveis';

import Grid from '../src/components/organisms/Grid';
import Header from '../src/components/organisms/Header';
import Bottom from '../src/components/organisms/Bottom';
import SelectSense from '../src/components/molecules/SelectSense';

const HomeContainer = styled.div`
  z-index: 1;
  background-color: ${colors.blueLight};
  height: 100vh;
`;

function Home() {
  return (
    <HomeContainer>
      <SelectSense />
      <Grid />
    </HomeContainer>
  );
}

export default Layout(Home);
