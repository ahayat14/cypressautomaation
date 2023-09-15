describe('Tutorialspoint Test', function () {
    // test case
    it('Handle Child Tabs using Invoke Function', function (){
       // launch the url
       cy.visit("https://www.tutorialspoint.com/selenium /selenium_automation_practice.htm")
       // removing the target attribute from the link with removeAttr()
       cy.get('a[title="TutorialsPoint - Home"]')
       .invoke('removeAttr', 'target').click()
       // assertion to verify the current Url
       cy.url().should('include','https://www.tutorialspoint.com/index.htm')
       // moving back to the parent tab with the help of go() method
       cy.go('back');
    })
 })