import './style/theme.scss';

import React, { useContext, useEffect } from 'react';

import { AppStateContext } from './state/reducers/AppState';
import Footer from './components/Footer';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Issues from './components/Issues';

const App = () => {
  const state = useContext(AppStateContext);
  useEffect(() => {
    state.initProject();
    state.initLabels();
    state.initIssues();
  }, []);
  return (
    <Grid container>
      <Header />
      <Issues />
      <Footer />
    </Grid>
  );
};

export default App;
