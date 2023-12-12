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

  it('second product is visible', () => {

    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get("#item_0_title_link").should("be.visible");
    
    cy.get(".inventory_list").find(".inventory_item").then(products => {
      expect(products).to.have.length(6);
      const secondProduct = products[1]
      cy.wrap(secondProduct).find('.inventory_item_name').contains('Sauce Labs Bike Light');
      cy.wrap(secondProduct).find('.inventory_item_price').contains('$9.99');
      cy.wrap(secondProduct).find('#add-to-cart-sauce-labs-bike-light').contains('Add to cart');
    })
  })

  it('third product is visible', () => {

    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get("#item_1_title_link").should("be.visible");
    
    cy.get(".inventory_list").find(".inventory_item").then(products => {
      expect(products).to.have.length(6);
      const thirdProduct = products[2]
      cy.wrap(thirdProduct).find('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt');
      cy.wrap(thirdProduct).find('.inventory_item_price').contains('$15.99');
      cy.wrap(thirdProduct).find('#add-to-cart-sauce-labs-bolt-t-shirt').contains('Add to cart');
    })
  })

  it('fourth product is visible', () => {

    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get("#item_5_title_link").should("be.visible");
    
    cy.get(".inventory_list").find(".inventory_item").then(products => {
      expect(products).to.have.length(6);
      const fourthProduct = products[3]
      cy.wrap(fourthProduct).find('.inventory_item_name').contains('Sauce Labs Fleece Jacket');
      cy.wrap(fourthProduct).find('.inventory_item_price').contains('$49.99');
      cy.wrap(fourthProduct).find('#add-to-cart-sauce-labs-fleece-jacket').contains('Add to cart');
    })
  })


  it('fifth product is visible', () => {

    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get("#item_2_title_link").should("be.visible");
    
    cy.get(".inventory_list").find(".inventory_item").then(products => {
      expect(products).to.have.length(6);
      const fifthProduct = products[4]
      cy.wrap(fifthProduct).find('.inventory_item_name').contains('Sauce Labs Onesie');
      cy.wrap(fifthProduct).find('.inventory_item_price').contains('$7.99');
      cy.wrap(fifthProduct).find('#add-to-cart-sauce-labs-onesie').contains('Add to cart');
    })

  })
  
  it('sixth product is visible', () => {

    cy.visit('https://www.saucedemo.com')
    cy.get('.login_logo').contains('Swag Labs')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get("#item_3_title_link").should("be.visible");
    
    cy.get(".inventory_list").find(".inventory_item").then(products => {
      expect(products).to.have.length(6);
      const sixthProduct = products[5]
      cy.wrap(sixthProduct).find('.inventory_item_name').contains('Test.allTheThings() T-Shirt (Red)');
      cy.wrap(sixthProduct).find('.inventory_item_price').contains('$15.99');
      cy.wrap(sixthProduct).find('button.btn').contains('Add to cart');
    })
  })


  })