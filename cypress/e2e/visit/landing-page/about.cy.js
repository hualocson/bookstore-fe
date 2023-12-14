describe("Test About page", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/about");
  });

  it("should display the title", () => {
    cy.get("#about-title").should("have.text", "Our Teams");
  });

  describe("should display listing of teams", () => {
    it("should display 3 teams", () => {
      cy.get("#about-teams").should("exist");
      cy.get("#about-teams").children().should("have.length", 3);
    });

    it("should display the correct first card", () => {
      cy.get("#about-teams")
        .children()
        .eq(0)
        .find("#card-name")
        .should("have.text", "Lương Minh Chiến");

      cy.get("#about-teams")
        .children()
        .eq(0)
        .find("#card-desc")
        .should("have.text", "20110615");

      cy.get("#about-teams")
        .children()
        .eq(0)
        .find("#card-role")
        .should("have.text", "Backend Developer");
    });

    it("should display the correct second card", () => {
      cy.get("#about-teams")
        .children()
        .eq(1)
        .find("#card-name")
        .should("have.text", "Hứa Lộc Sơn");

      cy.get("#about-teams")
        .children()
        .eq(1)
        .find("#card-desc")
        .should("have.text", "20110712");

      cy.get("#about-teams")
        .children()
        .eq(1)
        .find("#card-role")
        .should("have.text", "Frontend Developer");
    });

    it("should display the correct first card", () => {
      cy.get("#about-teams")
        .children()
        .eq(2)
        .find("#card-name")
        .should("have.text", "Phạm Phúc Bình");

      cy.get("#about-teams")
        .children()
        .eq(2)
        .find("#card-desc")
        .should("have.text", "20110252");

      cy.get("#about-teams")
        .children()
        .eq(2)
        .find("#card-role")
        .should("have.text", "Backend Developer");
    });
  });
});
