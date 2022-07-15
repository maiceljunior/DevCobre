import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing GET method in /client", () => {
  let connection: DataSource;

  interface Client {
    name: string;
    document: number;
    type: string;
  }

  let testClient1: Client = {
    name: "Client Test 1",
    document: 12345678901,
    type: "Pessoa Fisica",
  };

  let testClient2: Client = {
    name: "Client Test 2",
    document: 12345678912,
    type: "Pessoa Juridica",
  };

  let testRes1: any;
  let testRes2: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    testRes1 = await request(app).post("/client").send(testClient1);
    testRes2 = await request(app).post("/client").send(testClient2);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to list an client", async () => {
    const response = await request(app).get("/client");

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...testClient1,
        }),
        expect.objectContaining({
          ...testClient1,
        }),
      ])
    );
  });
});
