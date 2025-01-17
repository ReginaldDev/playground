describe("Data Picker", () => {
  beforeEach(() => {
    cy.goHome();

    cy.doLogin()

    cy.goTo("/date-picker", "Date Picker");
  });

  it('Deve adicionar minha data de aniversário', () => {
    cy.get('input[placeholder="Escolha uma data"][readonly]')
      .click()

    cy.get('select[aria-label="Month"]')
      .select('Fevereiro')

    cy.get('input[aria-label="Year"]')
      .type('1983')

    cy.get('span[aria-label="Fevereiro 18, 1983"]')
      .click()
  });

});
