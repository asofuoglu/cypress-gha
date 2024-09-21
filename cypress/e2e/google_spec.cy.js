describe('Google Search', () => {
  it('should open Google', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
    cy.title().should('include', 'Google');
  });
});