const request = require("supertest");
const {app, server} = require("../lib/server");

describe("Get Tasks", () => {
    test("Should returns a filtered explorer list by stack", async () => {
        const response = await request(server)
            .get("/v1/explorers/stack/elixir")
            .expect("Content-Type", /json/);
        expect(response.statusCode).toEqual(200);
        expect(response.body[0].stacks).toEqual(expect.arrayContaining(["elixir"]));
    });

    afterAll(() => {
        server.close();
    });
});