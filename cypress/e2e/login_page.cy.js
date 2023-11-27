describe('User logs in', () => {
  beforeEach(() => {
    cy.unregisterServiceWorkers();
  });

  it('is able to log in giving valid credentials', () => {
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

  it('is unable to log in with locked account', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').contains('Epic sadface: Sorry, this user has been locked out.')
  })
})