import {
  hasOperationName,
  aliasQuery,
  aliasMutation,
} from "../fixtures/graphql-test-utils";
import { getUserFixture } from "../fixtures/Test_User.fixture.json";
import "../fixtures/Test_UsersPlural.fixture.json";
// i assume fixtures are not in the right format for GQL

describe("user spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.intercept("GET", "https://squeakr-be.fly.dev/graphql/", (req) => {
      // Queries
      aliasQuery(req, "fetchUsers");
      aliasQuery(req, "GetReported");
      aliasQuery(req, "GetSqueaks");
      aliasQuery(req, "GetUser");

      // Mutations
      aliasMutation(req, "updateSqueak");
      aliasMutation(req, "addSqueak");
      aliasMutation(req, "addUser");
      aliasMutation(req, "deleteSqueak");
    }).as("utils");
  });

  it.only("the data loads", () => {
    cy.intercept("POST", "https://squeakr-be.fly.dev/graphql/", (req) => {
      aliasQuery(req, "fetchUsers");

      req.reply({
        fixture: "../fixtures/Test_UsersPlural.fixture.json",
      });
    }).as("fetchUsersResponse");
    cy.visit("http://localhost:3000/");
    cy.wait("@fetchUsersResponse")
      .its("response.body.data.fetchUsers")
      .should("have.length", 5);
  });

  it.skip("user can enter username and log in", () => {
    cy.get("#login-input").type("test_user");
    cy.get("#login-button").click();
    cy.intercept("GET", "https://squeakr-be.fly.dev/graphql/", (req) => {
      const { body } = req;
      if (hasOperationName(req, "GetUser")) {
        // Declare the alias from the initial intercept in the beforeEach
        req.alias = "gqlGetUserQuery";

        // Set req.fixture or use req.reply to modify portions of the response
        req.fixture(getUserFixture);
      }
    });

    // cy.wait("@gqlGetUserQuery");
    // cy.get(".user-greeting").contains("Hello Test_User");
  });

  it("on failed login, user is prompted to start a new account", () => {});

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

  it("logged in user should see other users' squeaks", () => {});

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
