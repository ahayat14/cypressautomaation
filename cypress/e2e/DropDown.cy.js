
/// <reference types="Cypress"  />
describe('handle dropdown', ()=>{

    it.skip('dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

       cy.get('#zcf_address_country')
       .select('Italy')
       .should('have.value', 'Italy')
        

    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


      it.skip('Auto suggestion dropdown', ()=>{

        cy.visit("https://www.wikipedia.org/")

       cy.get('#searchInput').type('Delhi')
       cy.get('.suggestion-title').contains('Delhi University').click()
        

    })


    it('Dynamic dropdown', ()=>
    {

        cy.visit("https://www.google.co.uk/")

       cy.get('#APjFqb').type('Cypress Automation')
       cy.wait(3000)

       cy.get('div.wM6W7d>span').each(($el, index, $list) => 
       {
        // $el is a wrapped jQuery element
        if ($el.text() === 'cypress automation tutorial') 
        {
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click()
        } 

    })
    cy.get('div.wM6W7d>span').should('have.value','cypress automation tutorial')

      
    })

})