///<reference types="cypress" />

describe('Cypress basics', () => {
  it('Should visit a page and assert title', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    // const title = cy.title()
    //console.log(title)

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo') 
  })

  it.only('Should find and interact with an element', () => {
    cy.visit('http://wcaquino.me/cypress/componentes.html')

    //cy.get('nao existe')
    cy.get('#buttonSimple').click()
    cy.get('#buttonSimple').should('have.value', 'Obrigado!')
  })

})
