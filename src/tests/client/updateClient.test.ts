import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing PATCH method in /client/:document", () => {
  let connection: DataSource;

  interface UpdateClient {
    document: number;
    name: string;
    type: string;
  }

  let testClient1: UpdateClient = {
    document: 12345678910,
    name: "Client Test",
    type: "Físico",
  };

  let response: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    response = await request(app).post("/client").send(testClient1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to update a client", async () => {
    const responsePatch = await request(app)
      .patch(`/client/${response.body.document}`)
      .send(testClient1.name);

    const responseGet = await request(app).get(
      `/client/${response.body.document}`
    );

    expect(responsePatch.status).toEqual(200);
    expect(responsePatch.body).toHaveProperty("message");

    expect(responseGet.body).toEqual(
      expect.objectContaining({
        document: response.body.document,
        name: testClient1.name,
        type: response.body.type,
      })
    );
  });

  test("Trying to update a client that doesn't exist", async () => {
    const response = await request(app).get(`/client/1`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
