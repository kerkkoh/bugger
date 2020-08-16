if (!process.env.PROJECT || !process.env.GITLAB_SECRET)
  throw 'Missing ENV parameters!';

export const PROJECT = process.env.PROJECT!;
export const GITLAB_SECRET = process.env.GITLAB_SECRET!;
