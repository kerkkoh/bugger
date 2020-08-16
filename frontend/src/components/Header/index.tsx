import { FormControlLabel, Grid, Switch, Typography } from '@material-ui/core';
import React, { useContext } from 'react';

import { AppStateContext } from '../../state/reducers/AppState';

const Header = () => {
  const state = useContext(AppStateContext);
  return (
    <>
      <Grid item xs={12} className="header">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item style={{ marginRight: '1.5rem' }}>
            <Typography variant="h2">
              <span role="img" aria-label="bug">
                🐛
              </span>
              Bugger
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: '1rem' }}>
            <Typography variant="h4" color="textSecondary">
              {state.project ? state.project.name_with_namespace : ''}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="header-controls">
        <FormControlLabel
          control={
            <Switch
              checked={
                !state.filter.hiddenState.find((state) => state === 'closed')
              }
              onChange={(e) => state.toggleHiddenState('closed')}
              name="checkedA"
            />
          }
          label="Show Closed Issues"
        />
      </Grid>
    </>
  );
};

export default Header;
