describe("Authentication", () => {
  // code here
  it("Basic authentication - username and password ", () => {
    cy.request({
      method: "GET",
      url: "https://postman-echo.com/basic-auth",
      auth: {
        username: "postman",
        pass: "password",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.be.true;
    });
  });
});
