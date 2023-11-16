describe('Visit Langing Page', () => {
  beforeEach(() => {
    cy.unregisterServiceWorkers();
  });

  it('passes', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('span.title').contains('Products')

    cy.get('button#react-burger-menu-btn').click()
    cy.get('a#logout_sidebar_link').click()
    cy.get('.login_logo').contains('Swag Labs')
  })
})