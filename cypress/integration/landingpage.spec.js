describe('Landing Page Test', function () {
  it('successfully loads with finding an element', function () {
    cy.visit('https://youthful-carson-edfeba.netlify.app/');
    cy.contains('Find your next car');
  });
});

describe('Landing Page Test', function () {
  it('Test toggle button in Showroom area', function () {
    cy.visit('https://youthful-carson-edfeba.netlify.app/');
    cy.get('#showroom-2').click();
    cy.get('.showroom-content-brand').get('span').contains('Subaru');
  });
});

describe('Order Page Test with searching order name', function () {
  it('Test next button of slideshow', function () {
    cy.visit('https://youthful-carson-edfeba.netlify.app/');
    cy.get('#signs').click();
  });
});
