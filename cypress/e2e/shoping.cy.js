describe('Order by Collect Deliver', () => {
  it('passes', () => {
    cy.viewport(Cypress.config("viewportWidth"), Cypress.config("viewportHeight"));
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('.navbar-brand').click();
    cy.get(':nth-child(1) > .card > .card-footer > .btn').click();
    cy.get(':nth-child(2) > .card > .card-footer > .btn').click()
    cy.get(':nth-child(4) > .nav-link').click();

    cy.wait(5000);

    cy.get(':nth-child(1) > #name').type('test');
    cy.get(':nth-child(2) > #name').type('coba');
    cy.get('#email').type('test123@gmail.com');
    cy.get('#address').type('grogol');
    cy.get('#country').select('United Kingdom');
    cy.get('#city').select('Cardiff');
    cy.get('#zip').type('12345');
    cy.get('#cc-name').type('testcardcc');
    cy.get('#cc-number').type('123312345');
    cy.get('#cc-expiration').type('12/12/27');
    cy.get('#cc-cvv').type('12/10/21');
    cy.get('.needs-validation > .btn').click();
    cy.wait(10000);
  })
})

describe('Order with Standar Shiping', () => {
  it('passes', () => {
    cy.viewport(Cypress.config("viewportWidth"), Cypress.config("viewportHeight"));
    cy.visit('https://sweetshop.netlify.app/sweets');
    cy.get('.navbar-brand').click();
    cy.get(':nth-child(1) > .card > .card-footer > .btn').click();
    cy.get(':nth-child(2) > .card > .card-footer > .btn').click()
    cy.get(':nth-child(4) > .nav-link').click();

    cy.wait(5000);

    cy.get(':nth-child(1) > #name').type('test1');
    cy.get(':nth-child(2) > #name').type('coba');
    cy.get('#email').type('test123@gmail.com');
    cy.get('#address').type('grogol');
    cy.get('#country').select('United Kingdom');
    cy.get('#city').select('Cardiff');
    cy.get('#zip').type('12345');
    cy.get('#cc-name').type('testcardcc');
    cy.get('#cc-number').type('123312345');
    cy.get('#cc-expiration').type('12/12/27');
    cy.get('#cc-cvv').type('12/10/21');
    cy.get(':nth-child(2) > .custom-control-label').click()
    cy.get('.needs-validation > .btn').click();
    cy.wait(10000);
  })
})
