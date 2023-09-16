import 'cypress-file-upload';
describe('File Uploads',()=>{
    it.skip('Single file upload',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('API Handbook.pdf');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

    })

    it.only('File Upload - Drag and Drop', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile("API Handbook.pdf",{subjectType:'drag-n-drop'});
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains("API Handbook.pdf");

    })

})