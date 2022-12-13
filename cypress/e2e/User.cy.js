describe("user spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("the page loads", () => {
    cy.get("h1").should("be.visible").contains("SQUEAKR");
  });

  it("user can enter username and log in", () => {
    cy.get("#login-input").should("be.visible").type("test_user");
    cy.get("#login-button").should("be.visible").click();
    cy.get(".user-greeting").should("be.visible").contains("Hello Test_User");
  });

  it("on failed login, user is prompted to start a new account", () => {});

  it.skip("user can create a new account", () => {
    cy.get("#new-user-button").click();
    cy.get("h3").should("be.visible").contains("Welcome to Squeakr!");
    cy.url().should("eq", "http://localhost:3000/create-account");
    cy.get("#new-user-input").should("be.visible").type("new_test_user");
    cy.get("#submit-new-user").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("#login-input").should("be.visible").type("new_test_user");
    cy.get("#login-button").should("be.visible").click();
    cy.get(".user-greeting").should("be.visible").contains("Hello Test_User");
    // create new user not working
  });

  it("logged in user should see other users' squeaks", () => {});

  it.skip("user can squeak", () => {
    cy.get("#login-input").should("be.visible").type("test_user");
    cy.get("#login-button").should("be.visible").click();
    cy.wait(500);
    cy.get("#new-squeak-input").type("cypress test squeak");
    cy.get("#post-new-squeak-button").click();
    cy.get(".user-content-squeaks > :nth-child(1) > .center")
      .should("be.visible")
      .contains("cypress test squeak");
  });

  it.skip("user CANNOT post a squeak with racist language", () => {});
  it.skip('user can "nut" a squeak', () => {});
  it.skip("user can report a squeak", () => {});
  it.skip("user can delete their own squeak", () => {});
  it.skip("user CANNOT delete another user's squeak", () => {});
});
