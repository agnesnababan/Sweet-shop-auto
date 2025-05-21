describe('LOGIN WITH PRESS ENTER KEY', () => {
  it('passes', () => {
    cy.viewport(Cypress.config("viewportWidth"), Cypress.config("viewportHeight"));
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get('#exampleInputEmail').type('test123@gmail.com');
    cy.get('#exampleInputPassword').type('test123 {ENTER}');
  })
})
