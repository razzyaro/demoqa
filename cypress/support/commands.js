
///<reference types = "cypress"/>
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("getByData", (selector) =>{
//     return cypress.get(`[data-test = ${selector}]`)
// })

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  // it('fails to visit website 1', function () {
  //   cy.visit('https://demoqa.com')
  // })


  // Cypress.Commands.add('downloadFile', (url) => {
  //   cy.wait(1000); // wait for the download to start
  //   cy.request({
  //     url: url,
  //     method: 'GET',
  //     responseType: 'arraybuffer'
  //   }).then((response) => {
  //     cy.writeFile('samplFile.jpeg', response.body, 'binary');
  //   });
  // });

  Cypress.Commands.add("downloadFile", (filename) => {
    cy.wait(1000); // wait for file to start downloading
    return cy.readFile(`cypress/downloads/${filename}`).then((data) => {
      return data;
    });
  });
  
  

  