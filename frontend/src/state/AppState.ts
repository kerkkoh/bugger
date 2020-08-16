import axios from 'axios';

interface Filter {
  hiddenState: string[];
}

/**
 * @redux true
 */
export class AppState {
  project?: any;
  issues?: any[];
  labels?: any[];
  filter: Filter = { hiddenState: ['closed'] };

  async getter(path: string) {
    return (await axios.get(`/api/v1${path}`)).data;
  }

  async initProject() {
    this.project = await this.getter('/project');
  }
  async initIssues() {
    this.issues = await this.getter('/issues');
  }
  async initLabels() {
    this.labels = await this.getter('/labels');
  }

  toggleHiddenState(state: string) {
    const hidden = this.filter.hiddenState;
    const exists = hidden.indexOf(state) !== -1;
    this.filter.hiddenState = exists
      ? hidden.filter((cur) => cur !== state)
      : [...hidden, state];
  }

  get filteredIssues(): any[] | undefined {
    return this.issues?.filter(
      (issue) => !this.filter.hiddenState.find((state) => issue.state === state)
    );
  }
}
