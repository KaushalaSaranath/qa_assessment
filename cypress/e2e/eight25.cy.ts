/// <reference types="cypress" />

describe('eight25media site - Cypress (TypeScript)', () => {
  const baseUrl = 'https://www.eight25media.com';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

    it('Homepage Test — title contains eight25', () => {
        cy.wait(1000);
        cy.title().should('match', /eight25/i);
    });

    it('Navigation Test — navigate to Work page', () => {
    cy.get('.navbar').should('exist');
    cy.get('.navbar-toggler').click();
    cy.get('#mega-menu-item-42 > .mega-menu-link')
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
    cy.url().should('eq', 'https://www.eight25media.com/eight25-work/');
    cy.contains(/WeWork|work/i, { timeout: 10000 }).should('exist');
    });

    it('Form Validation Test', () => {
    cy.get('#menu-item-4068 > a').click();

    cy.get('[name="your-name"]').type('Test User');
    cy.get('[name="your-email"]').type('test@example.com');
    cy.get('[name="your-phone"]').type('1234567890');
    cy.get('[name="your-company"]').type('Test Company');
    cy.get('[name="your-message"]').type('This is a test message');

    cy.get('[name="your-phone"]')
        .invoke('val')
        .should('match', /^[0-9]+$/);

    cy.get('[name="your-email"]')
        .invoke('val')
        .should('match', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('Responsive Menu Test', () => {
    cy.get('.navbar').should('exist');

    cy.viewport('iphone-6');

    cy.get('.navbar-toggler')
        .should('be.visible')
        .click();

    cy.get('#mega-menu-item-42 > .mega-menu-link')
        .should('be.visible');
    });

});
