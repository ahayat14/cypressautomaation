const { beforeEach } = require("mocha")

describe('MyTestSuite', ()=>{

    before(()=>{
        cy.log("Launch App")
    })

    after(()=>{
        cy.log("Close App")
    })

    beforeEach(()=>{
        cy.log("Login")
    })

    afterEach(()=>{
        cy.log("Log out from application")
    })
    
    it('Search', ()=>{
        cy.log("****  Search   ****");

    })

    it('Advance Search', ()=>{
        cy.log("*****Advance Search ******");
        
    })


    it('Listing Products', ()=>{
        cy.log("********Listing Products******")
    })


  
})