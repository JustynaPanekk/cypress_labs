describe('Visit Langing Page', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
  })
})