describe("Login spec", () => {
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
    cy.get("@fetchUser");
    // .its("response.body.data.fetchUser.username")
    // .should("contain", "Test_User");
    // cy.wait("@fetchUser")
    //   .its("response.body.data.fetchUser.isAdmin")
    //   .should("eq", false);
  });

  it("user can see posted squeaks", () => {
    cy.intercept("POST", "https://squeakr-be.fly.dev/graphql/", (req) => {
      req.reply({
        fixture: "../fixtures/Test_User.fixture.json",
        delay: 500,
      });
    }).as("AllSqueaks");

    cy.wait("@AllSqueaks")
      .its("response.body.data.fetchUser.allSqueaks")
      .should("have.length", 3);
    //cy.get(".user-greeting").contains("Hello Test_User!");
  });
});

describe("Uer spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/user/7");
  });

  it("should have a header with logo", () => {
    cy.get("header.row").should("exist").should("be.visible");
  });

  it("should have logout button", () => {
    cy.get(".logout-tab > button").should("exist").should("be.visible");
  });
  it("should welcome user with their name", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_User.fixture.json",
    }).as("fetchUser");

    cy.get(".user-greeting")
      .should("exist")
      .contains("Hello Test_User! Welcome");
  });

  it("should be able to add a nut", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_User.fixture.json",
    }).as("fetchUser");
    cy.get(":nth-child(1) > .squeak-options > .squeak-nut-button")
      .should("exist")
      .should("be.visible");
      cy.get(':nth-child(1) > .squeak-options > .squeak-nut-button > .squeak-text').contains("0")
      cy.get(":nth-child(1) > .squeak-options > .squeak-nut-button").click()
    });


  it("should be able to report", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_User.fixture.json",
    }).as("fetchUser");
    cy.get('.squeak-report-button')
    .should("exist")
    .should("be.visible");
    cy.get('.squeak-report-button > .squeak-text').contains("0")
    cy.get('.squeak-report-button').click()
  });

  it("should have a container for all the squeaks", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_User.fixture.json",
    }).as("fetchUser");
    cy.get(".user-content-squeaks").should("exist");
    cy.get(".user-content-squeaks > :nth-child(1)")
      .should("exist")
      .should("be.visible");
    cy.get(".user-content-squeaks > :nth-child(1) > .center")
      .should("exist")
      .should("be.visible")
      .contains("Yet another test squeek");

    cy.get(":nth-child(1) > .squeak-options > .squeak-nut-button")
      .should("exist")
      .should("be.visible");
    cy.get(
      ":nth-child(1) > .squeak-options > .squeak-nut-button > .squeak-text"
    )
      .should("be.visible")
      .should("exist")
      .contains("0");
  });

  it("should be able to cancel when writing a squeak", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_User.fixture.json",
    }).as("fetchUser");
    cy.get(".post-squeak").click({ force: true });
    cy.get(".cancel-button")
      .should("exist")
      .should("be.visible")
      .contains("Cancel")
      .click();
  });

  it("should have a button to create a squeak", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_User.fixture.json",
    }).as("fetchUser");
    cy.get(".post-squeak").click({ force: true });
    cy.get("#new-squeak-input").type("hello there");
  });

  it("should be able to submit squeak", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_User.fixture.json",
    }).as("fetchUser");
    cy.get(".post-squeak").click({ force: true });
    cy.get("#new-squeak-input").type("hello there");
    cy.get("#post-new-squeak-button")
      .should("exist")
      .should("be.visible")
      .contains("Squeak!")
      .click();
  });

  it("should be able to logout", () => {
    cy.get(".logout-tab > button").click();
    cy.get(".app").should("exist");
    // cy.get(".main-page").should("exist");
  });
});

describe("admin spec", () => {
  beforeEach(() => {
    cy.intercept("https://squeakr-be.fly.dev/graphql", {
      fixture: "Test_reportedSqueaks.fixture.json",
    }).as("reportedSqueaks");

    cy.visit("http://localhost:3000/admin/2");
  });

  it("Should display the App name, logo, and user view button", () => {
    cy.get(".row.center")
      .should("exist")
      .get(".squeakr-title")
      .should("exist")
      .get("img")
      .should("exist")
      .get(".user-tab")
      .should("exist");
  });

  it("Should display and message indicating a user is in Admin view", () => {
    cy.get("strong").should("exist");
  });

  it("Should allow an admin to see reported squeaks", () => {
    cy.get(".user-content-squeaks").should("exist");
    cy.get(".user-content-squeaks > :nth-child(1)").should("exist");
    cy.get(".user-content-squeaks > :nth-child(2)").should("exist");
    cy.get(".user-content-squeaks > :nth-child(1)")
      .contains("User 1")
      .get(".user-content-squeaks > :nth-child(1)")
      .contains(
        "I hate cypress, burn it to the ground. Checking metrics for cypress testing"
      )
      .get(".user-content-squeaks > :nth-child(1)")
      .contains("IDENTITY_ATTACK")
      .get(".user-content-squeaks > :nth-child(1)")
      .contains("0.05794714")
      .get(":nth-child(1) > .squeak-options > .admin-squeak-approve")
      .should("exist")
      .get(":nth-child(1) > .squeak-options > .admin-squeak-deny")
      .should("exist");
    cy.get(".user-content-squeaks > :nth-child(2)")
      .contains("User 2")
      .get(".user-content-squeaks > :nth-child(2)")
      .contains("newest 2")
      .get(".user-content-squeaks > :nth-child(2)")
      .contains("IDENTITY_ATTACK")
      .get(".user-content-squeaks > :nth-child(2)")
      .contains("0.0045322375")
      .get(":nth-child(2) > .squeak-options > .admin-squeak-approve")
      .should("exist")
      .get(":nth-child(2) > .squeak-options > .admin-squeak-deny")
      .should("exist");
  });

  it("admin can approve a reported squeak", () => {
    cy.get(":nth-child(1) > .squeak-options > .admin-squeak-approve").click();
  });

  it("admin can deny a reported squeak", () => {
    cy.get(":nth-child(2) > .squeak-options > .admin-squeak-deny").click();
  });

  it("admin can click the User button to return to the main view", () => {
    cy.get(".user-tab").should("exist").should("be.visible").click();
    cy.intercept("https://squeakr-be.fly.dev/graphql", {
      fixture: "Test_User.fixture.json",
    }).as("getUser");
    cy.get(".user-tab").should("not.exist");
  });
});
