describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('the page loads', () => {
    cy.get('h1').should('be.visible').contains('SQUEAKR');
  })

  it('user can enter username', () => {
    cy.get('#login-button').should('be.visible').click()
    cy.get('.text-input').should('be.visible').type('USERNAME')
    cy.get('.submit-button').should('be.visible').click()
  });

  it.skip('user can check their own info', () => {
    cy.get('#login-button').should('be.visible').click()
    cy.get('.text-input').should('be.visible').type('USERNAME')
    cy.get('.submit-button').should('be.visible').click()

    cy.get('#user-info-button').should('be.visible').click()
    cy.get('h2').should('be.visible').contains('Oh nose\!') // refactor with user ID
  });

  it('user can squeak', () => {
    cy.get('#login-button').should('be.visible').click()
    cy.get('.text-input').should('be.visible').type('USERNAME')
    cy.get('.submit-button').should('be.visible').click()

    cy.get('#new-squeak-button').should('be.visible').click()
    cy.get('.text-input').should('be.visible').type('That\'s me Squeakin\'')
    cy.get('#post-new-squeak-button').should('be.visible').click()
    cy.wait(500)

    cy.get('.squeak-text').should('be.visible').contains('That\'s me Squeakin\'')

  });

})