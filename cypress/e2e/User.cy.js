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
      fixture: "Test_user.json",
    }).as("fetchUser");

    cy.get(".user-greeting").should("exist").contains("Hello Test_User!");
    cy.get("strong").contains("User view");
  });
  it("should have a container for all the squeaks", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_user.json",
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
  it("should be able to long out", ()=> {
    cy.get('.logout-tab > button').click()
    cy.get('.app').should("exist")
    cy.get('.main-page').should("exist")
  })
  it.skip("should have a button to create a squeak", () => {
    cy.intercept("https://squeakr-be.fly.dev/graphql/", {
      fixture: "Test_user.json",
    }).as("fetchUser");
    cy.get(".post-squeak").click({force:true});

    //add post
  });
});
