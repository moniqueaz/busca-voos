import styled from 'styled-components';
import Layout from '../src/components/Layout';

import { device, colors, font } from '../src/style/variaveis';

import Grid from '../src/components/organisms/Grid';
import SelectDirection from '../src/components/molecules/SelectDirection';

const HomeContainer = styled.div`
  z-index: 1;
  background-color: ${colors.blueLight};
  height: 100%;
  min-height: 100vh;
`;

function Home() {
  return (
    <HomeContainer>
      <SelectDirection />
      <Grid />
    </HomeContainer>
  );
}

export default Layout(Home);
