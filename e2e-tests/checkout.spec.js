describe('Checkout SauceDemo', () => {
  const url = 'https://www.saucedemo.com'

  beforeEach(() => {
    cy.visit(url)
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.inventory_item').first().contains('Add to cart').click()
    cy.get('.shopping_cart_link').click()
    cy.contains('Checkout').click()
  })

  it('Completar compra', () => {
    cy.get('#first-name').type('Madelin')
    cy.get('#last-name').type('QA')
    cy.get('#postal-code').type('15000')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.contains('Thank you for your order!').should('be.visible')
  })
})