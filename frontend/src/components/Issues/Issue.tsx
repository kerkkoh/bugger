import { Avatar, Chip, Grid, Grow, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Issue = ({ issue, timeout }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, timeout);
  }, [timeout]);
  return (
    <Grid item lg={3} md={6} xs={12}>
      <Grow
        in={show}
        style={{ transformOrigin: '0 0 0' }}
        timeout={Math.random() * 1000}
      >
        <Paper elevation={3} className="issue">
          <div className={`statusIndicator ${issue.state}`}>&nbsp;</div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12}>
              <a href={issue.web_url}>
                <Typography variant="subtitle1">{issue.title}</Typography>
              </a>
            </Grid>
            {issue.author ? (
              <Grid item style={{ marginRight: '0.5rem' }}>
                <a href={issue.author.web_url}>
                  <Avatar
                    alt={issue.author.name}
                    src={issue.author.avatar_url}
                  />
                </a>
              </Grid>
            ) : null}
            {issue.state ? (
              <Grid item className="status">
                <Chip
                  label={issue.state.toUpperCase()}
                  className={issue.state}
                  color="secondary"
                />
                {issue.labels
                  ? issue.labels.map((label) => (
                      <Chip
                        label={label.name}
                        className="label"
                        style={{
                          background: label.color,
                          color: label.text_color,
                        }}
                      />
                    ))
                  : null}
              </Grid>
            ) : null}
            {issue.description && issue.description.length > 0 ? (
              <Grid item xs={12}>
                <Typography variant="body2" className="description">
                  {issue.description}
                </Typography>
              </Grid>
            ) : null}
          </Grid>
        </Paper>
      </Grow>
    </Grid>
  );
};

export default Issue;
