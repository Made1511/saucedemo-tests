describe('Carrito SauceDemo', () => {
  const url = 'https://www.saucedemo.com'

  beforeEach(() => {
    cy.visit(url)
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('Agregar producto al carrito', () => {
    cy.get('.inventory_item').first().contains('Add to cart').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })
})