


describe('testing a categories page', () => {
  it('test visit a page', () => {
    cy.visit('categories')

    cy.get('h1').should('have.text', 'Категории')
  })
})