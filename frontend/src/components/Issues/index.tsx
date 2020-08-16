import { Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';

import { AppStateContext } from '../../state/reducers/AppState';
import Issue from './Issue';
import Loading from '../Common/Loading';

const Issues = () => {
  const state = useContext(AppStateContext);

  const issueData = state.filteredIssues?.map((issue) => {
    const labels = state.labels
      ? issue.labels.map((labelName) =>
          state.labels!.find((label) => label.name === labelName)
        )
      : issue.labels;
    return { ...issue, labels };
  });
  console.log('issueData', issueData);
  console.log('state.labels', state.labels);

  return (
    <Grid item xs={12} className="issues">
      <Grid container spacing={2}>
        {!state.issues || state.issues.length < 0 ? (
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Loading />
          </Grid>
        ) : issueData!.length > 0 ? (
          issueData?.map((issue, index) => (
            <Issue key={issue.id} issue={issue} timeout={index * 200} />
          ))
        ) : (
          <Typography variant="caption">No visible issues...</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Issues;
