describe("End to end test of scheduler app", () => {
  const url = "http://localhost:3000";

  it("should open the home page and validate the form", () => {
    cy.visit(url);

    cy.contains("Career Foundry Scheduler");
    cy.contains("Next").click();
    cy.contains("Please enter your first name");
  });

  it("should open the home page, fill the form and navigate to schedule page", () => {
    cy.visit(url);

    cy.get("input").type("Sameera");
    cy.contains("Next").click();

    cy.url().should("include", "/schedule");

    cy.contains("Sameera");
  });

  it("should be able select a time slot and place a appointment", () => {
    cy.contains("29").click();
    cy.get("button").contains("Select").click();

    cy.get("textarea").type("Reason for the scheduling a meeting");

    cy.get("button").contains("Next").click();

    cy.get("button").contains("Confirm").click();
  });
});
