import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing POST method in /client", () => {
  let connection: DataSource;

  interface Client {
    name: string;
    document: number;
    type: string;
  }

  let testClient: Client = {
    name: "Client Test",
    document: 12345678901,
    type: "Pessoa Fisica",
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
  test("Try to create an client that already exists", async () => {
    const response = await request(app).post("/client").send(testClient);

    expect(response.status).toEqual(409);
    expect(response.body).toHaveProperty("message");
  });
});
