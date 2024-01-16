describe('Verify product list page', () => {
    beforeEach(() => {
      cy.unregisterServiceWorkers();
    });
  
    it('check that you can add first product to the shopping cart', () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('.login_logo').contains('Swag Labs')
  
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
  
      cy.get('[data-test="login-button"]').click()

      cy.get('#add-to-cart-sauce-labs-backpack').click();

      cy.get('.shopping_cart_badge').should('have.text', '1');
  
    })

    it('check that you can add all products to the shopping cart', () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('.login_logo').contains('Swag Labs')
  
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
  
      cy.get('[data-test="login-button"]').click()

      cy.get('.inventory_list>.inventory_item').each((product, index) => {
        cy.wrap(product).find('button.btn').click();
        cy.get('.shopping_cart_badge').should('have.text', `${index + 1}`)
      })
     
    })

    it('verify that you can remove items from the shopping cart', () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('.login_logo').contains('Swag Labs')
  
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
  
      cy.get('[data-test="login-button"]').click()

      cy.get('.shopping_cart_link').click()

      cy.get('.inventory_item').should('not.exist')

      cy.get('button#continue-shopping').click()

      cy.get('#add-to-cart-sauce-labs-backpack').click();

      cy.get('.shopping_cart_badge').should('have.text', '1');

      cy.get('.shopping_cart_link').click()

      cy.get("#item_4_title_link").should("be.visible");

      cy.get('button#remove-sauce-labs-backpack').click();

      cy.get('.inventory_item').should('not.exist');
    })
  })