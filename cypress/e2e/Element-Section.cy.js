describe('Element bar', () => {
 beforeEach(() =>{
   cy.visit("https://demoqa.com/")
});
  it("Allow users to select the element navigation button And type their info", () =>{
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type("Abdul-Razak Hussein").should("be.visible")
    cy.get('#userEmail').type("razaqyaro@gmail.com").should("be.visible")
    cy.get('#currentAddress').type("A.E 27, Offinso - Asempanaye")
    cy.get('#permanentAddress').type("West Tanokrom, Grace Water Ave Street - HSE 24")
    cy.get('#submit').click()
    cy.get('#name').contains("Abdul-Razak Hussein").should("be.visible")
    cy.get('#email').contains("razaqyaro@gmail.com").should("be.visible")
    cy.get('.border > #currentAddress').contains("A.E 27, Offinso - Asempanaye").should("be.visible")
    cy.get('.border > #permanentAddress').contains("West Tanokrom, Grace Water Ave Street - HSE 24").should("be.visible")

   });
   it("Check user can click on the check box button and use it as expected", () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    cy.get('.rct-collapse').click()
    //cy.get(':nth-child(3) > .rct-text > label').click()
    //cy.get(':nth-child(3) > .rct-text > label > .rct-checkbox').click()
    //cy.get(':nth-child(3) > .rct-text > label > .rct-checkbox').should("be.checked")
    // cy.get('#result').contains("home desktop notes commands documents workspace react angular veu office public private classified general downloads wordFile excelFile")

    
    });

    it("Check the radio button can be used as expected", () => {
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
     
      //cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').should("be.selected")
    })

    it("Check the web tables can be used as expected", () => {
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
      cy.get('#addNewRecordButton').contains("Add").should("be.visible")
      cy.get('.rt-table').should("be.visible")
      cy.get('#addNewRecordButton').should("be.visible")
      cy.get('#searchBox').should("be.visible")
      cy.get('#basic-addon2').should("be.visible")
      cy.get('#basic-addon2').should("be.visible")
      //cy.get('.col').should("exist")
      //cy.get('.col-md-6').should("exist")
      cy.get('#addNewRecordButton').click()
      cy.get('.modal-header').should("be.visible")
      cy.get('.modal-body').should("be.visible")
      cy.get('.close').should("be.visible")
      cy.get('.modal-header').contains("Registration")
      cy.get('#userForm').should("be.visible")
      cy.get('#firstName').type("Abdul-Razak")
      cy.get('#lastName').type("Hussein")
      cy.get('#userEmail').type("rza@gmail.com")
      cy.get('#age').type("57")
      cy.get('#salary').type("8000")
      cy.get('#department').type("Marketing")
      cy.get('#submit').click()
      //cy.location('https://demoqa.com/webtables').should('eq', 'https://demoqa.com/webtables');
    })

    it("Check the buttons used as expected0,", () => {
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
      cy.get('.col-md-6 > :nth-child(2)').should("be.visible")
      cy.get('#doubleClickBtn').should("be.visible")
      cy.get('#rightClickBtn').should("be.visible")
      cy.contains("Click Me").should("be.visible")
      cy.get('#doubleClickBtn').dblclick()
      cy.get('#doubleClickMessage').contains("You have done a double click")
      cy.get('#rightClickBtn').rightclick()
      cy.get('#rightClickMessage').contains("You have done a right click")
      cy.contains("Click Me").click()
      //cy.get(".highlight").contains("You have done a dynamic click")  

    })

    it("Checking the links", () => {
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
      //cy.get('#linkWrapper').should("be.visble")
      cy.get('#created').click()
      cy.get('#linkResponse').should("exist").contains("Link has responded with staus 201 and status text Created")
      cy.get('#no-content').click()
      cy.get('#linkResponse').should("exist").contains("Link has responded with staus 204 and status text No Content")
      cy.get('#moved').click()
      cy.get('#linkResponse').should("exist").contains("Link has responded with staus 301 and status text Moved Permanently")
      cy.get('#bad-request').click()
      cy.get('#linkResponse').should("exist").contains("Link has responded with staus 400 and status text Bad Request")
      cy.get('#unauthorized').click()
      cy.get('#linkResponse').should("exist").contains("Link has responded with staus 401 and status text Unauthorized")
      cy.get('#forbidden').click()
      cy.get('#linkResponse').should("exist").contains("Link has responded with staus 403 and status text Forbidden")
      cy.get('#invalid-url').click()
      cy.get('#linkResponse').should("exist").contains("Link has responded with staus 404 and status text Not Found")
    });

    it("Check the Upload and Download section", () => {
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()
      cy.get('.col-md-6 > :nth-child(2)').should("be.visible")
      cy.get('#downloadButton').should("be.visible")
      //cy.get('#downloadButton').click()
      cy.get('#downloadButton').click();
      cy.downloadFile('sampleFile.jpeg').then((data) => {
       expect(data).to.exist;
      });

      cy.get('#uploadFile').click()
      


   })
 })