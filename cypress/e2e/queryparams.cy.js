describe("Query Parameters", () => {
  // code here
  it("passing query params & verify response length and json", () => {
    // code here
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
      qs: {
        page: 2,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data).have.length(6);
      expect(response.body).to.be.an("object");
    });
  });
});
