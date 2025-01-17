describe('Iframe', ()=>{
  beforeEach(()=>{
    cy.goHome()
    cy.doLogin()
    cy.goTo('/iframe', 'IFrame')
  })

  it('Deve preencher o nome em uma página que tem Iframe', ()=>{
    
    cy.get('[data-cy="iframe-inputs"]')
      .then(($iframe)=>{
        const $body = $iframe.contents().find('body')

        cy.wrap($body)
          .find('#fullname')
          .type('Reginaldo')
      })
    cy.get('#fullname').type('Reginaldo')
  })
})
