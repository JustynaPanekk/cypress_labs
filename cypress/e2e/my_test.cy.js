describe('Verify product list page', () => {
  beforeEach(() => {
    cy.unregisterServiceWorkers();
  });

 
  it('inventory items are displayed correctly', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('span.title').contains('Products')

    cy.get('.inventory_list').should("be.visible");

    cy.get('.inventory_list').find('div.inventory_item').should("have.length", 6);

  })

  it('first prodcut is visible', () => {

    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get("#item_4_title_link").should("be.visible");
    
    cy.get(".inventory_list").find(".inventory_item").then(products => {
      expect(products).to.have.length(6);
      const firstProduct = products[0]
      cy.wrap(firstProduct).find('.inventory_item_name').contains('Sauce Labs Backpack');
      cy.wrap(firstProduct).find('.inventory_item_price').contains('$29.99');
      cy.wrap(firstProduct).find('#add-to-cart-sauce-labs-backpack').contains('Add to cart');
  })

  })


})