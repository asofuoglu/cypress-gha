describe('Google Search Test', () => {
  it('searches for a name and clicks on the link with specific text', () => {
    for (let i = 0; i < 50; i++) {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').type('Abdullatif sofuoğlu');
    cy.get('textarea[name="q"]').type('{enter}');
    cy.url().should('include', 'search');
    cy.contains('Facebook').click(); 
    }
  });
});