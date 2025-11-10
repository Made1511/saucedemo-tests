describe('Login SauceDemo', () => {
  const url = 'https://www.saucedemo.com'

  it('Login válido', () => {
    cy.visit(url)
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Validación adicional: URL correcta
    cy.url().should('include', '/inventory.html')

    // Validación adicional: título visible
    cy.contains('Products').should('be.visible')

    // Validación adicional: productos cargados
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })

  it('Login inválido', () => {
    cy.visit(url)
    cy.get('#user-name').type('invalid_user')
    cy.get('#password').type('wrong_password')
    cy.get('#login-button').click()

    // Validación adicional: mensaje de error
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface')
  })
})