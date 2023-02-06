/// <reference types = "cypress"/>

describe("Alert, frames and windows bar", () => {
 beforeEach(() =>{
    cy.visit("https://demoqa.com/")
 });
 it("Check the alerts-frames-windows button is used as expected", () => {
   cy.get('.category-cards > :nth-child(3)').click()
   cy.get('.row').should("be.visible")
   cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
   cy.get('#tabButton').should("be.visible")
   cy.get('#browserWindows').should("be.visible")
   cy.get('#windowButton').should("be.visible")
   cy.get('#windowButton').click()
   cy.get('#messageWindowButton').should("be.visible")
   cy.get('#messageWindowButton').click()
   cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
   cy.get('#javascriptAlertsWrapper').should("be.visible")
   cy.get('#alertButton').should("be.visible")
   cy.get('#alertButton').click()
   cy.get('#timerAlertButton').should("be.visible")
   cy.get('#timerAlertButton').click()
   cy.get('#confirmButton').should("be.visible")
   cy.get('#confirmButton').click()
   cy.get('#confirmResult').should("exist")
   cy.get('#promtButton').should("be.visible")
   
    cy.on('window:prompt', (str) => {
      expect(str).to.equal('Please enter your name')
    })
    cy.get('#promtButton').click()

    cy.get('#promptResult').should("be.visible")
    
 })

 it("Check the frames section function as expected", () => {
   cy.get('.category-cards > :nth-child(3)').click()
   cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
   cy.get('#framesWrapper').should("be.visible")
 })

 it("Check the Nested frames functions as expected", () => {
   cy.get('.category-cards > :nth-child(3)').click()
   cy.get(':nth-child(3) > .element-list > .menu-list > #item-3').click()
   cy.get('#frame1').should("be.visible")
   cy.get('#framesWrapper > :nth-child(1)').should("be.visible")
 })

 it("Check the function of the modal dialog section", () => {
   cy.get('.category-cards > :nth-child(3)').click()
   cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click()
   cy.get('#modalWrapper > :nth-child(1)').should("be.visible")
   cy.get('#modalWrapper > :nth-child(1)').should("exist")
   cy.get('#showSmallModal').click()
   cy.get('.modal-content').should("be.visible")
   cy.get('.modal-content').should("exist")
   cy.get('#closeSmallModal').click()
   cy.get('#showLargeModal').should("be.visible")
   cy.get('#showLargeModal').click()
   cy.get('.modal-content').should("be.visible")
   cy.get('.modal-content').should("exist")
   cy.get('#closeLargeModal').should("be.visible")
   cy.get('#closeLargeModal').should("exist")
   cy.get('#closeLargeModal').click()

 })
})