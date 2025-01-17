describe("Checkbox", () => {
  beforeEach(() => {
    cy.goHome();

    cy.doLogin();

    cy.goTo("/checkbox", "Checkbox");
  });

  it("Deve marcar as linguagens que usam Node.js", () => {
    cy.get('label[for="javascript"]').click();

    cy.get('label[for="typescript"]').click();
  });

  it("Deve marcar todas as opções", () => {
    const langs = ["javascript", "python", "rust", "go", "typescript"];

    langs.forEach((lang) => {
      cy.get(`label[for="${lang}"]`).click();
    });
  });
});
