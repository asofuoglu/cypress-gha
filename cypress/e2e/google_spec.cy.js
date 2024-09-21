describe("Google Search Test", () => {
  it("Facebook", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");
    cy.contains("Facebook").click();
  });

  it("Applause", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");
    cy.contains("Applause").click();
  });

  it("Vergi", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");
    cy.get('a[href*="vknsorgula"]').click();
  });

  it("Abdüllatif Şener", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");
    cy.contains("Abdüllatif Şener").click();
  });
});
