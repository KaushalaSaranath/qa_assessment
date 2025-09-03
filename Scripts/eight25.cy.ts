//Cypress test script

describe('Basic QA Assessment Tests', () => {

  // Check homepage title
  it('should load the homepage and check the title', () => {
    cy.visit('https://www.eight25media.com'); // Visit homepage
    cy.title().should('include', 'EIGHT25'); 
  });

  // Navigate to Work page
  it('should navigate to Work page', () => {
    cy.visit('https://www.eight25media.com');  
    cy.contains('Work').click();   
    cy.url().should('include', '/work');       
    cy.contains('Our Work').should('be.visible'); 
  });

  // Fill Contact Form
  it('should fill contact form', () => {
    cy.visit('https://www.eight25media.com/contact'); 

    // Fill in form fields
    cy.get('input[name="name"]').type('Test User'); 
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');

    // Verify the input values
    cy.get('input[name="name"]').should('have.value', 'Test User');
    cy.get('input[name="email"]').should('have.value', 'testuser@example.com');
    cy.get('textarea[name="message"]').should('have.value', 'This is a test message');
  });

});
