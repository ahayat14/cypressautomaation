import 'cypress-iframe';
require ('@4tw/cypress-drag-drop')
describe('Mouse Operations',()=>{

    it.skip('MouseHover',()=>{
        cy.visit("https://demo.opencart.com");
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mousehover').click();

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');

    });

    it.skip('Right Click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Approach 1
        cy.get('.context-menu-one.btn-neutral').trigger('contextmenu');
        cy.get('context-menu-icon-copy > span').should('be.visible'); 

        //Approach 2
        cy.get('.context-menu-one.btn-neutral').rightclick();
        cy.get('context-menu-icon-copy > span').should('be.visible');
    });

    it.skip('Double click',()=>{
        cy.visit("https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard2");
        cy.frameLoaded('#iframeResult');    //load the frame

        //Approach 1  -trigger()
        //cy.iframe('#iframeResult').find("button[ondblclick='myfunction()']").trigger('dblclick');

        //Approach 2  -dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myfunction()']").dblclick();
    });

    it.skip('drag and Drop using plugin', ()=>{
        cy.visit("https://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000)
        cy.get('#box6').drag('#box106', {force:true});


    });

    it.only('Scrolling the Page', ()=>{
        cy.visit("https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/")
        cy.get(':nth-child(90) > [style="font-weight: bold; font-size:15px; text-align:left"]').scrollIntoView({duration:2000});
        cy.get(':nth-child(90) > [style="font-weight: bold; font-size:15px; text-align:left"]').should('be.visible')

        cy.get(':nth-child(55) > [style="font-weight: bold; font-size:15px; text-align:left"]').scrollIntoView({duration:2000});
        cy.get(':nth-child(55) > [style="font-weight: bold; font-size:15px; text-align:left"]').should('be.visible')
    });


});