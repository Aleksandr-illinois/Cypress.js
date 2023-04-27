
describe('Автотесты на авторизацию', function () {
    it('Верный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/'); 
         cy.get('#loginButton').should('be.disabled');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon');
     })
     it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#exitRestoreButton > .exitIcon');
        
    })
    it('Верный логин, не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1567');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
    it('Неверный логин, верный пароль', function () {
       cy.visit('https://login.qa.studio/'); 
       cy.get('#loginButton').should('be.disabled');
       cy.get('#mail').type('german@dolnikov.ru1567');
       cy.get('#loginButton').should('be.disabled');
       cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
       
   })
   it('Ошибка валидации', function () {
    cy.visit('https://login.qa.studio/'); 
    cy.get('#loginButton').should('be.disabled');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#loginButton').should('be.disabled');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').should('be.enabled');
    cy.get('#loginButton').click();
    cy.contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon');
})
it('Проверка регистра', function () {
   cy.visit('https://login.qa.studio/'); 
   cy.get('#loginButton').should('be.disabled');
   cy.get('#mail').type('GerMan@Dolnikov.ru');
   cy.get('#loginButton').should('be.disabled');
   cy.get('#pass').type('iLoveqastudio1');
     cy.get('#loginButton').should('be.enabled');
     cy.get('#loginButton').click();
     cy.contains('Такого логина или пароля нет');
     cy.get('#exitMessageButton > .exitIcon');
})
 })
 