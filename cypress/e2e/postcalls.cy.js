import { fa, faker } from "@faker-js/faker";

describe("test description", () => {
  // code here

  it("Approach 1 - Hard code json", () => {
    const requestBody = {
      name: "MG Tagore",
      email: "trtrt002@bruen.example",
      gender: "female",
      status: "active",
    };
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer f388a063d9b7817199e02da3a44415b9a24202336221a7f4c48ef2486f24b879",
      },
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.gender).to.eq("female");
      expect(response.body).to.have.property("name", "MG Tagore");
    });
  });

  it("Approach 2 - Dynamic json", () => {
    const requestBody = {
      // name: Math.random().toString(5).substring(2),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      gender: faker.person.sex(),
      status: "active",
    };
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization:
          "Bearer f388a063d9b7817199e02da3a44415b9a24202336221a7f4c48ef2486f24b879",
      },
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.gender).to.eq(requestBody.gender);
      expect(response.body.name).to.eq(requestBody.name);
      expect(response.body.email).to.eq(requestBody.email);
    });
  });
  it.only("Approach 3 - Fixture data json", () => {
    cy.fixture("postuser").then((data) => {
      const requestBody = data;
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          Authorization:
            "Bearer f388a063d9b7817199e02da3a44415b9a24202336221a7f4c48ef2486f24b879",
        },
        body: requestBody,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.gender).to.eq(requestBody.gender);
        expect(response.body.name).to.eq(requestBody.name);
        expect(response.body.email).to.eq(requestBody.email);
        expect(response.body).have.property("email", requestBody.email);
      });
    });
  });
});
