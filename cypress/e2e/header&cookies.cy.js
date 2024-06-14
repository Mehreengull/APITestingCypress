import { fa, faker } from "@faker-js/faker";
describe("test description", () => {
  // code here
  let authToken;
  before("Create token", () => {
    const requestBody = {
      clientName: faker.person.firstName(),
      clientEmail: faker.internet.email({ provider: "example.com" }),
    };

    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/api-clients",
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.equal(201);
      authToken = response.body.accessToken;
      cy.log(authToken);
    });
  });

  it("create order", () => {
    cy.request({
      method: "POST",
      url: "https://simple-books-api.glitch.me/orders",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      body: {
        bookId: 1,
        customerName: faker.internet.email({ provider: "example.com" }),
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });

  it("Get all orders", () => {
    // code here
    cy.request({
      method: "GET",
      url: "https://simple-books-api.glitch.me/orders",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + authToken,
      },
      cookies: {
        cookieName: "myCookies",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
