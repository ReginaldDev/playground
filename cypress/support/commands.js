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

Cypress.Commands.add("goHome", () => {
  //cy.viewport(1920, 1080);

  cy.visit("/");

  cy.contains("h2", "Faça login") //valida o h2 com Faça login somente
    .should("be.visible"); //Valida se esta visivel
});

//Helper para facilitar se o login for o mesmo sempre
Cypress.Commands.add('doLogin',()=>{
  cy.login('papito@cyskills.com.br', 'showtime')
  cy.userLoggedin()
})

Cypress.Commands.add("login", (email, password) => {
  if (email) {
    cy.get('[data-cy="email"]').type(email); //login
  }
  if (password) {
    cy.get('[data-cy="password"]').type(password); //senha
  }

  cy.get('[data-cy="login-button"]').click(); //clica no botao
});

Cypress.Commands.add("noticeHave", (text) => {
  cy.get(".notice p").should("be.visible").and("have.text", text);
});

Cypress.Commands.add("userLoggedin", () => {
  cy.get('[data-cy="welcome-title"]')
    .should("be.visible")
    .and("have.text", "Boas vindas ao Cypress Playground");
});

Cypress.Commands.add("goTo", (route, title) => {
  cy.get(`nav a[href="${route}"]`).click();
  cy.contains("h2", title).should("be.visible");
});
