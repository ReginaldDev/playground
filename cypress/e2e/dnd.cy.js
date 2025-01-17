describe('Drag and Drop', ()=>{
  //inicialização (visit, login, e /page..)
  beforeEach(()=>{
      cy.goHome()
      cy.doLogin()
      cy.goTo('/tasks', 'Task Board')
  })
  //Caso de teste
  it('Deve finalizar uma tarefa', ()=>{
    //Variaveis 
    const task= 'Definir requisitos do projeto'
    //variaval com a funcao  nativa do Js para transferencia de dados
    const dataTransfer = new DataTransfer()
    //clicando e segurando o elemento
    cy.contains('div[draggable=true]', task)
      .trigger('dragstart', {
          dataTransfer                
    })
    //soltando o elemento dentro do lugar pre determinado
    cy.contains('h4', 'Done') 
      .parent() 
      .trigger('drop', {
        dataTransfer
      })  
    //Validação 
    cy.contains('h4', 'Done') 
      .parent() 
      .contains('div[draggable=true]', task)
      .should('be.visible')
  })
})
