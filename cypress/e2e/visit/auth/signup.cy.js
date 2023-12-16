const userInfo = {
  email: "test@a.com",
  token: 120904, // send first email and get this token in mailtrap and paste here
};

const baseUrl = Cypress.env("beUrl");

describe("Test Signup", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/auth/signup");
  });

  it("should display the title", () => {
    cy.get("#signup-title").should("have.text", "Join now!");
  });

  it("Test Signup input empty email", () => {
    cy.get("#signup-email").clear();

    cy.get("#signup-button").click();

    cy.get("#signup-error").should("have.text", "Please fill your email");
  });

  it("Test press Enter in email input", () => {
    cy.intercept("POST", `${baseUrl}/api/v1/auth/signup`).as("post"); // set this up at top
    cy.get("#signup-email").type("abcs@gmail.com").type("{enter}");
    cy.wait("@post").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Test Signup failed with email exist", () => {
    cy.intercept("POST", `${baseUrl}/api/v1/auth/signup`).as("post"); // set this up at top
    cy.get("#signup-email").type("hualocson@gmail.com");

    cy.get("#signup-button").click();

    cy.wait("@post").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(400);
      expect(interception.response.body.error.message).to.equal(
        "User already exists. Please login!"
      );
    });
  });

  it("Test Signup failed with invalid token", () => {
    cy.intercept("POST", `${baseUrl}/api/v1/auth/signup`).as("post-signup");

    cy.intercept("POST", `${baseUrl}/api/v1/auth/verify-email`).as(
      "post-verify"
    );
    cy.get("#signup-email").type(userInfo.email);

    cy.get("#signup-button").click();

    cy.wait("@post-signup").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.equal(201);
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

  it("Test Signup success", () => {
    cy.get("#signup-email").type(userInfo.email);

    cy.get("#signup-button").click();

    cy.wait(2000);

    cy.get("#verify-title").should("have.text", "Check your email");

    cy.get("#verify-token").type(userInfo.token);
    cy.get("#verify-button").click();

    cy.wait(2000);

    cy.url().should("include", "/products");
  });
});
