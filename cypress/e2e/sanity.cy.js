describe('loads PlexTrac Home Page and confrims the page has loaded', () => {
  it('passes', () => {
    cy.visit('https://plextrac.com/');
    cy.get('#CybotCookiebotDialogBodyButtonAccept').click();
  })
})