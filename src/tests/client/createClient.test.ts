import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing POST method in /client", () => {
  let connection: DataSource;

  interface Client {
    document: string;
    name: string;
    type: string;
  }

  let testClient: Client = {
    document: "12345678901",
    name: "Client Test",
    type: "Fisico",
  };

  let testClient2: Client = {
    document: "12345678901",
    name: "Client TestDois",
    type: "Fisico",
  };

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to create an client", async () => {
    const response = await request(app).post("/client").send(testClient);

    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        document: response.body.document,
        name: response.body.name,
        type: response.body.type,
      })
    );
  });

  test("Trying to create an client that already exists", async () => {
    const response = await request(app).post("/client").send(testClient);

    expect(response.status).toEqual(409);
    expect(response.body).toHaveProperty("message");
  });

  test("Trying to create a client with a document that already exists", async () => {
    const response = await request(app).post("/client").send(testClient2);

    expect(response.status).toEqual(409);
    expect(response.body).toHaveProperty("message");
  });
});
