describe('CEP', ()=>{
  beforeEach(()=>{
    cy.goHome()
    cy.doLogin()
    cy.goTo('/cep', 'CEP (API dos Correios)')
  })

  it('Deve cadastrar um endereço consumindo a API dos correios', ()=>{
    const adress ={
      cep:'16200242',
      logradouro: 'Rua Wagih Rahal',
      localidade: 'Birigui',
      uf: 'SP'
    }
    //Força a requisição, colocando dados pré decididos
    cy.intercept('GET', `https://viacep.com.br/ws/${adress.cep}/json/`, {
        statusCode: 200, 
        body: adress
    }).as('getCep')

    cy.get('input[name="cep"]').type(adress.cep)
    cy.contains('button', 'Cadastrar').click()

    cy.wait('@getCep')

    cy.get('input[name="logradouro"]', {timeout: 10000}) //Atraso de 10 segundos
      .should('have.value', adress.logradouro)

    cy.get('input[name="cidade"]', {timeout: 12000}) //Atraso de 10 segundos
      .should('have.value', adress.localidade)

    cy.get('input[name="estado"]', {timeout: 10000}) //Atraso de 10 segundos
      .should('have.value', adress.uf)
  })
})
