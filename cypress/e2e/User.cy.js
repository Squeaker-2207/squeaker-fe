describe("user spec", () => {
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

  it("user can enter username and log in to see posted squeaks", () => {
    cy.get("#login-input").type("User 1");
    cy.get("#login-button").click();
    cy.intercept("POST", "https://squeakr-be.fly.dev/graphql/", (req) => {
      req.reply({
        fixture: "../fixtures/Test_Squeaks.fixture.json",
        delay: 500,
      });
    }).as("AllSqueaks");

    cy.wait("@AllSqueaks")
      .its("response.body.data.allSqueaks")
      .should("have.length", 3);
    // cy.get(".user-greeting").contains("Hello User 1!");
  });

  it.skip("on failed login, user is prompted to start a new account", () => {});

  it.skip("user can create a new account", () => {
    cy.get("#new-user-button").click();
    cy.get("h3").contains("Welcome to Squeakr!");
    cy.url().should("eq", "http://localhost:3000/create-account");
    cy.get("#new-user-input").type("new_test_user");
    cy.get("#submit-new-user").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("#login-input").type("new_test_user");
    cy.get("#login-button").click();
    cy.get(".user-greeting").contains("Hello Test_User");
    // create new user not working
  });

  it.skip("logged in user should see other users' squeaks", () => {});

  it.skip("user can squeak", () => {
    cy.get("#login-input").type("test_user");
    cy.get("#login-button").click();
    cy.wait(500);
    cy.get("#new-squeak-input").type("cypress test squeak");
    cy.get("#post-new-squeak-button").click();
    cy.get(".user-content-squeaks > :nth-child(1) > .center").contains(
      "cypress test squeak"
    );
  });

  it.skip("user CANNOT post a squeak with racist language", () => {});
  it.skip('user can "nut" a squeak', () => {});
  it.skip("user can report a squeak", () => {});
  it.skip("user can delete their own squeak", () => {});
  it.skip("user CANNOT delete another user's squeak", () => {});
});
