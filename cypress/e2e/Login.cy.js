
describe("Login spec", () => {
  beforeEach(() => {});

  it("the users data loads", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept("POST", "https://squeakr-be.fly.dev/graphql/", (req) => {
      req.reply({
        fixture: "../fixtures/Test_UsersPlural.fixture.json",
        delay: 500,
      });
    }).as("AllUsers");

    cy.wait("@AllUsers")
      .its("response.body.data.fetchUsers")
      .should("have.length", 5);
  });

  it("user can enter username and log in", () => {
    cy.intercept("POST", "https://squeakr-be.fly.dev/graphql/", (req) => {
      req.reply({
        fixture: "../fixtures/Test_User.fixture.json",
        delay: 500,
      });
    }).as("fetchUser");

    cy.get("#login-input").type("User 1");
    cy.get("#login-button").click();
    cy.wait("@fetchUser")
      .its("response.body.data.fetchUser.username")
      .should("contain", "Test_User");
    cy.wait("@fetchUser")
      .its("response.body.data.fetchUser.isAdmin")
      .should("eq", false);
  });

  it("user can see posted squeaks", () => {
    cy.intercept("POST", "https://squeakr-be.fly.dev/graphql/", (req) => {
      req.reply({
        fixture: "../fixtures/Test_Squeaks.fixture.json",
        delay: 500,
      });
    }).as("AllSqueaks");

    cy.wait("@AllSqueaks")
      .its("response.body.data.allSqueaks")
      .should("have.length", 3);
    cy.get(".user-greeting").contains("Hello Test_User!");
  });
});
