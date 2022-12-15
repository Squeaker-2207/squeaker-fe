
describe("admin spec", () => {
  beforeEach(() => {
    cy.intercept("https://squeakr-be.fly.dev/graphql", {
      fixture: "Test_reportedSqueaks.fixture.json",
    }).as("reportedSqueaks");

    cy.visit("http://localhost:3000/admin/2");
  });

  it("Should display the App name, logo, and user view button", () => {
    cy.get('.row.center').should('exist')
      .get('.squeakr-title').should('exist')
      .get('img').should('exist')
      .get('.user-tab').should('exist')
  });

  it("Should display and message indicating a user is in Admin view", () => {
    cy.get('strong').should('exist')
  });
  
  it("Should allow an admin to see reported squeaks", () => {
    cy.get('.user-content-squeaks').should('exist')
    cy.get('.user-content-squeaks > :nth-child(1)').should('exist')
    cy.get('.user-content-squeaks > :nth-child(2)').should('exist')
    cy.get('.user-content-squeaks > :nth-child(1)').contains('User 1')
      .get('.user-content-squeaks > :nth-child(1)').contains('I hate cypress, burn it to the ground. Checking metrics for cypress testing')
      .get('.user-content-squeaks > :nth-child(1)').contains('IDENTITY_ATTACK')
      .get('.user-content-squeaks > :nth-child(1)').contains('0.05794714') 
      .get(':nth-child(1) > .squeak-options > .admin-squeak-approve').should('exist')
      .get(':nth-child(1) > .squeak-options > .admin-squeak-deny').should('exist')  
    cy.get('.user-content-squeaks > :nth-child(2)').contains('User 2')
      .get('.user-content-squeaks > :nth-child(2)').contains('newest 2')
      .get('.user-content-squeaks > :nth-child(2)').contains('IDENTITY_ATTACK')
      .get('.user-content-squeaks > :nth-child(2)').contains('0.0045322375')
      .get(':nth-child(2) > .squeak-options > .admin-squeak-approve').should('exist')
      .get(':nth-child(2) > .squeak-options > .admin-squeak-deny').should('exist')  
  });

  it("admin can approve a reported squeak", () => {
    cy.get(':nth-child(1) > .squeak-options > .admin-squeak-approve').click()
  });

  it("admin can deny a reported squeak", () => {
    cy.get(':nth-child(2) > .squeak-options > .admin-squeak-deny').click()
  });

  it.skip("admin can click the User button to return to the main view", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql", {
      fixture: "Test_allSqueaks.fixture.json",
    }).as("allSqueaks");
    cy.get('.user-tab').click()
  });
});
