import { getGreeting } from '../support/app.po';

describe('ngprxme', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngprxme!');
  });
});
