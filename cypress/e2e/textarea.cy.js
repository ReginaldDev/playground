describe("Upload", () => {
  beforeEach(() => {
    cy.goHome();
  });

  it("Deve preencher o campo de area de texto", () => {
    cy.doLogin()

    cy.goTo('/textarea', 'Textarea')

    cy.get('textarea[name= "message"]')
      .type("Boas Vindas ao Cypress Skills. Um curso de formação completo para você aprender sobre automação!");
  });
});


