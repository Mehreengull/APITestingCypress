import { fa, faker } from "@faker-js/faker";
describe("test description", () => {
  let token =
    "f388a063d9b7817199e02da3a44415b9a24202336221a7f4c48ef2486f24b879";
  // code here
  it("APIChaining Create Retreive Update Delete", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: {
        email: faker.internet.email(),
        name: faker.person.firstName(),
        gender: faker.person.sex(),
        status: "active",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      const id = response.body.id;
      cy.request({
        method: "GET",
        url: `https://gorest.co.in/public/v2/users/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        cy.request({
          method: "PUT",
          url: `https://gorest.co.in/public/v2/users/${id}`,
          body: {
            name: "Scott",
          },
          headers: {
            Authorization: "Bearer " + token,
          },
        }).then((response) => {
          expect(response.body).to.have.property("name", "Scott");
          cy.request({
            method: "DELETE",
            url: `https://gorest.co.in/public/v2/users/${id}`,
            headers: {
              Authorization: "Bearer " + token,
            },
          }).then((response) => {
            expect(response.status).to.eq(204);
          });
        });
      });
    });
  });
});
