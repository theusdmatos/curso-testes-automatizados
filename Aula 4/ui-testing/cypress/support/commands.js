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

import field from '../support/fields'

Cypress.Commands.add('clickButton', (label) => {
  cy.get('a').contains(label).click();
});


Cypress.Commands.add('accessWebSite', (label) => {
  cy.visit('http://localhost:3000/');
});

Cypress.Commands.add('writeFields', (label) => {
  const text = [

    field.TEXT.skillNameText,
    field.TEXT.developersText,
    field.TEXT.technologiesText,
    field.TEXT.rolesText

  ]

  text.forEach(text => {

    cy.get(text)
      .type('test')
      .should('have.value', 'test')

  })
});
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
