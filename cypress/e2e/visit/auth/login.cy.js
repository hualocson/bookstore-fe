const userInfo = {
  email: "hualocson@gmail.com",
  token: 120904, // send first email and get this token in mailtrap and paste here
};

const baseUrl = Cypress.env("beUrl");

describe("Test Login", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/auth/login");
  });

  it("should display the title", () => {
    cy.get("#login-title").should("have.text", "Welcome back!");
  });

  it("Test Login input empty email", () => {
    cy.get("#login-email").clear();

    cy.get("#login-button").click();

    cy.get("#toast-error").should("have.text", "Please fill your email");
  });

  it("Test press Enter in email input", () => {
    cy.get("#login-email").type("abcs@gmail.com").type("{enter}");

    cy.get("#toast-error").should("have.text", "Please fill your email");
  });

  it("Test Login failed with email not exist", () => {
    cy.intercept("POST", `${baseUrl}/api/v1/auth/login`).as("post"); // set this up at top
    cy.get("#login-email").type("abs@gmail");

    cy.get("#login-button").click();

    cy.wait("@post").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(422);
      expect(interception.response.body.error.message).to.equal(
        "Validation error: Email is invalid!"
      );
    });
  });

  it("Test Login failed with invalid token", () => {
    cy.intercept("POST", `${baseUrl}/api/v1/auth/login`).as("post-login");

    cy.intercept("POST", `${baseUrl}/api/v1/auth/verify-email`).as(
      "post-verify"
    );
    cy.get("#login-email").type(userInfo.email);

    cy.get("#login-button").click();

    cy.wait("@post-login").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.wait(2000);

    cy.get("#verify-title").should("have.text", "Check your email");

    cy.get("#verify-token").type(1234);
    cy.get("#verify-button").click();

    cy.wait("@post-verify").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(400);
      expect(interception.response.body.error.message).to.equal(
        "Validation error: Token is invalid!"
      );
    });
  });

  it("Test Login success", () => {
    cy.get("#login-email").type(userInfo.email);

    cy.get("#login-button").click();

    cy.wait(2000);

    cy.get("#verify-title").should("have.text", "Check your email");

    cy.get("#verify-token").type(userInfo.token);
    cy.get("#verify-button").click();

    cy.wait(2000);

    cy.url().should("include", "/products");
  });
});
