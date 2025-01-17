describe("Textarea", () => {
  beforeEach(() => {
    cy.goHome();

    cy.doLogin()

    cy.goTo("/upload", "Upload");
  });

  it("Deve anexar um doc", () => {
    cy.get('input[name= "doc"]')
      .selectFile('cypress/fixtures/doc.pdf')
        .then(element => {
          expect(element[0].files[0].name).to.equal('doc.pdf')
        })
  });

  it("Deve anexar uma imagem", () => {
    cy.get('input[name= "photo"]')
      .selectFile('cypress/fixtures/liga.jpg') //subindo a imagem selecionada
        .then(element => {   //função callback para conferir se o elemento esta certo
          expect(element[0].files[0].name).to.equal('liga.jpg')
        })
    cy.get('#image-upload')   //validação da upload
        .find('img')  //procura tags img
        .should('be.visible') 
        .should('have.attr', 'src')  //valida se houve atributo SRC
        .and('include', 'blob') //blob aparece quando a preview de imagem carregada
  });
});
