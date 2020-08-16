import { GITLAB_SECRET, PROJECT } from './constants';

import { Gitlab } from '@gitbeaker/node';
import _ from 'lodash';
import express from 'express';

const router = express.Router();

const api = new Gitlab({
  host: 'https://gitlab.com',
  token: GITLAB_SECRET,
});

const getProject = async () => await api.Projects.show(PROJECT);
const getLabels = async () => await api.Labels.all(PROJECT);
const getIssues = async () =>
  await api.Issues.all({ projectId: PROJECT, maxPages: 1 });

router.get('/project', async (_req, res) => {
  try {
    res.send(await _.memoize(getProject)());
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/issues', async (_req, res) => {
  try {
    const issues = ((await _.memoize(getIssues)()) as [
      { confidential: boolean }
    ]).filter((issue) => !issue.confidential);

    res.send(issues);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/labels', async (_req, res) => {
  try {
    res.send(await _.memoize(getLabels)());
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/ping', async (req, res) => res.send('pong'));

export default router;
