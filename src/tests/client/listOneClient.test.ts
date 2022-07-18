import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing GET method in /client/:document", () => {
  let connection: DataSource;

  interface Client {
    document: string;
    name: string;
    type: string;
  }

  let testClient1: Client = {
    document: "12345678901",
    name: "Client TestUm",
    type: "Fisico",
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

  test("Trying to list a specific client", async () => {
    const responseGet = await request(app).get(
      `/client/${response.body.document}`
    );

    expect(responseGet.status).toEqual(200);
    expect(responseGet.body).toEqual(
      expect.objectContaining({
        document: response.body.document,
        name: response.body.name,
        type: response.body.type,
      })
    );
  });

  test("Trying to list a specific client that doesn't exist", async () => {
    const responseGet = await request(app).get(`/client/1`);

    expect(responseGet.status).toEqual(404);
    expect(responseGet.body).toHaveProperty("message");
  });
});
