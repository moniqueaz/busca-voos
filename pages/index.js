import Layout from '../src/components/Layout';

import Grid from '../src/components/organisms/Grid';
import Header from '../src/components/organisms/Header';
import Bottom from '../src/components/organisms/Bottom';

function Home() {
  return (
    <div>
      <Header></Header>
      <Grid></Grid>
      <Bottom></Bottom>
    </div>
  );
}

export default Layout(Home);
