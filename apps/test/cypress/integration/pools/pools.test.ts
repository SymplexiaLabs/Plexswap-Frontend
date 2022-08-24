describe('Silos Page', () => {
  beforeEach(() => {
    cy.visit('/Silos')
  })

  it('loads live Silos', () => {
    cy.get('#Silos-table').should('be.visible')
  })

  it('loads finished Silos', () => {
    cy.get('#finished-Silos-button').click()
    cy.get('#Silos-table').should('be.visible')
  })
})
