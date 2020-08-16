import { Grid, Typography } from '@material-ui/core';

import React from 'react';

const Footer = () => {
  return (
    <Grid item xs={12} className="footer">
      <Typography variant="subtitle2">
        <span role="img" aria-label="bug">
          🐛
        </span>
        Bugger by <a href="https://github.com/kerkkoh">Kerkkoh</a>
      </Typography>
    </Grid>
  );
};

export default Footer;
