describe("Tags", () => {
  beforeEach(() => {
    cy.goHome();

    cy.doLogin()

    cy.goTo("/tags", "Tags");
  });

  it("Deve adicionar algumas tags", () => {
    
    const tags = ['Cypress', 'JavaScript', 'Node.js']
    
    tags.forEach(tag=>{
      cy.get('.new-tag')
          .type(`${tag}{Enter}`)
          .should('have.value', '')
      cy.wait(500) //Think time  
    })
    
    tags.forEach(tag =>{
        cy.get('.tag-input')
            .should('contain', tag)
    })
  });

});
