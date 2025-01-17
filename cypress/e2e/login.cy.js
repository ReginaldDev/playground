describe("Login", () => {
  //Executa 1 ou mais antes de CADA teste
  beforeEach(() => {
    cy.goHome();
  });

  /*Executa 1 ou mais depois de CADA teste
  afterEach(()=>{

  })
  
  //Executa unica vez antes de TODOS os teste
  before(()=>{

  })
  
  //Executa unica vez depois de TODOS os teste
  after(()=>{

  }) */

  //Teste de Login
  it("Deve logar com sucesso", () => {
    cy.login("papito@cyskills.com.br", "showtime")
    cy.userLoggedin();
  });

  //Teste de senha inválida
  it("Não deve logar com senha inválida", () => {
    cy.login("papito@cyskills.com.br", "123456")
    cy.noticeHave("E-mail ou senha incorretos. Por favor, tente novamente!");
  });

  //Teste de email não cadastrado
  it("Não deve logar com email não cadastrado", () => {
    cy.login("404@cyskills.com.br", "showtime")
    cy.noticeHave("E-mail ou senha incorretos. Por favor, tente novamente!");
  });

  //Teste de email incorreto
  it("Não deve logar com email incorreto", () => {
    cy.login("www.cyskills.com.br", "showtime")
    cy.noticeHave(
      "O formato do e-mail está incorreto. Por favor, verifique e tente novamente!"
    );
  });

  //Teste sem email
  it('Não deve logar sem o email', ()=>{
    cy.login('', 'showtime')
    cy.noticeHave("Parece que você esqueceu de informar seu e-mail.")
  })

  //Teste sem senha
  it('Não deve logar sem a senha', ()=>{
    cy.login('papito@cyskills.com.br', '')
    cy.noticeHave("Por favor, digite sua senha para continuar.")
  })

  //Teste sem email e senha
  it('Não deve logar sem o email e sem a senha', ()=>{
    cy.login('', '')
    cy.noticeHave("Parece que você esqueceu de informar seu e-mail.")
  })
});
