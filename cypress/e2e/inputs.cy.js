describe("Input Fields", () => {
  
  beforeEach(() => {
    cy.goHome();
  });

  it("deve preencher o campo texto", () => {
    cy.doLogin()

    cy.get('nav a[href="/input-fields"]').click();

    cy.contains("h2", "Input Fields").should("be.visible");

    cy.get("#fullname") //id = #.....; 
    
    cy.get('input[name= "email"]') //name = 'input[name="....."]';
      .type("fernando@papito.dev") 

    cy.get('input[placeholder= "12345"]') // placeholder ='input[placeholder= "...."]'
      .type("2024")

    cy.get('input[name= "date"]') //input date precisa de um pouco de atenção
      .type("2024-10-16")
  });
});
