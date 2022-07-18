import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import app from "../../app";
import request from "supertest";

describe("Testing DELETE method in /client/:document", () => {
  let connection: DataSource;

  interface Client {
    document: string;
    name: string;
    type: string;
  }

  let testClient1: Client = {
    document: "12345678901",
    name: "Client TestDois",
    type: "Fisico",
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

  test("Trying to delete a client", async () => {
    const response = await request(app).delete(
      `/client/${testRes1.body.document}`
    );

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("message");
  });

  test("Trying to delete a client that doesn't exist", async () => {
    const response = await request(app).delete(`/client/1`);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
