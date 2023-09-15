
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

    it('check cell data from specific row & column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("hfgjhgjgjggj@gmail.com")

    })

    it('Read all data from first page', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within( ()=>{
                    cy.get("td").each( ($col, index, $cols)=>{
                        cy.log($col.text());
                    })
                })
            })


    })

    it('Pagination', ()=>{

        //find the total number of pages
        /*let totalPages;
        cy.get(".col-sm-6.text-end").then( (e)=>{
            let mytext=e.text();    //showing 1 to 10 of 5581 (559 pages)
            totalPages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
            cy.log("Total Number of pages in Tablee ====>"+totalPages);
        })*/

        let totalPages=5;
        for(let p=1;p<=totalPages;p++)
        {
            if(totalPages>1)
            {
                cy.log("Active page is ==="+p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each(  ($row, index, $rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then( (e)=>{
                            cy.log(e.text());   //email
                        })
                    })
                })
            }
        }
    })
})