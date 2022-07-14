import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import app from "../../app";
import request from "supertest";

describe("Testing DELETE method in /client/:id", () => {
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

  let testRes1: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );

    testRes1 = await request(app).post("/client").send(testClient1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to delete an client", async () => {
    const response = await request(app).delete(
      `/client/${testRes1.body.document}`
    );

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("message");
  });
});
