import Server from '../../api/classes/Server'
import request from "supertest";

const { app } = new Server()

describe("GET /", () => {
  test("it should return success", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200)
  });
});
