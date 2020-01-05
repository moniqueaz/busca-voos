import Head from 'next/head';
import ResetStyle from '../style/reset';
import GlobalStyle from '../style/global';

function IndexPage() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Baskervville:400,400i&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/2.9.6/react-datepicker.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <ResetStyle />
      <GlobalStyle />
    </div>
  );
}

export default IndexPage;
