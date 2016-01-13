import * as notAllowedStrat from '../../src/issue-strategies/not-allowed.js';
import DummyJira from '../dummy-jira.js';

const dummyJira = new DummyJira();

describe('Deployment Task Strategy Apply Tests', () => {
  it('Should not be able to commit against Deployment Task, should throw error', () =>
    expect(() => notAllowedStrat.apply(dummyJira.issues.DeploymentTask1))
      .to.throw(/Cannot commit against DeploymentTask1. It is of type Deployment Task./)
  );
});