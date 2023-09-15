
describe('Handle Tables', function(){

    this.beforeEach('Login', ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();   //Customers----> Customers

        cy.get("#menu-customer>a").click();  //customer main menu
        cy.get("#menu-customer>ul>li:first-child").click()  //customer sub menu

    })

    it('Check Number of rows and column', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')


    })
})