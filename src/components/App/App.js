import React from 'react';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
