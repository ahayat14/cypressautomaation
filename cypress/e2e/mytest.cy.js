describe('suite name', function() 
{
  it('test1', function() 
  {
    cy.visit('https://example.cypress.io')
    cy.title().should("eq","Cypress.io: Kitchen Sink")
  })


})