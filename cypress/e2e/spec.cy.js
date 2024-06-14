import { faker } from "@faker-js/faker";
describe("Get & Post request with faker", () => {
  it("Verify status code and status text", () => {
    cy.request("https://gorest.co.in/public/v2/users").then((response) => {
      expect(response.status).to.have.eq(200);
      // assertion code here
    });

    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer f388a063d9b7817199e02da3a44415b9a24202336221a7f4c48ef2486f24b879",
      },
      body: {
        name: "MG Tagore",
        email: faker.internet.email(),
        gender: "female",
        status: "active",
      },
    }).then((response) => {
      expect(response.body).to.have.property("id");
      expect(response.status).to.equal(201);
    });

    cy.request("https://gorest.co.in/public/v2/users").then((response) => {
      expect(response.status).to.have.eq(200);
      expect(response.statusText).to.eq("OK");
      // assertion code here
    });
  });
});
