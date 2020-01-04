import { connect } from 'react-redux';
import api from '../src/services/api';
import Layout from '../src/components/Layout';
import { TOKEN } from '../src/services/auth';

import Grid from '../src/components/organisms/Grid';

function Home() {
  return (
    <div>
      <Grid></Grid>
    </div>
  );
}

async function getAirlines() {
  const postData = {
    tripType: 'RT',
    from: 'BHZ', //origem
    to: 'SAO', //destino
    outboundDate: '2020-02-10', //data de partida
    inboundDate: '2020-02-17', //data de volta
    cabin: 'EC', //classe econômica (EC) ou executiva (EX)
    adults: 1, //adultos
    children: 0, //crianças
    infants: 0, //bebês
  };

  await api
    .post(`search?time=${Date.now()}`, postData, {
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
    .then(response => {
      console.log('response: ', response);
      return response;
    })
    .catch(error => {
      console.log('error: ', error);
      return error;
    });
}

export default Layout(Home);
