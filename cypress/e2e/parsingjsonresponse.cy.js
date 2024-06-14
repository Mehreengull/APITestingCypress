describe("parsing json response", () => {
  // code here
  it("parse json response body", () => {
    // code here
    cy.request("https://fakestoreapi.com/products").then((response) => {
      expect(response.status).to.have.eq(200);
      expect(response.body[0]).to.have.property("id");
    });
  });
});
