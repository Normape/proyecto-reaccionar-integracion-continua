describe('authentication', () => {
  let user;
  beforeEach(() => {
    return cy
      .logout()
      .createNewUser()
      .then(u => (user = u))
      .visit('/');
  });

  it('should allow existing users to login', () => {
    cy.getByText('login')
      .click()
      .getByLabelText('Username')
      .type(user.username)
      .getByLabelText('Password')
      .type(user.password)
      .getByText('Submit')
      .click()
      .assertRoute('/');
    cy.getByTestId('username-display').should('contain', user.username);
  });
});
