// e2e-tests/smoke.spec.js
describe('Smoke test', () => {
  it('Carga la página principal de SauceDemo', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').should('exist')
  })
})
