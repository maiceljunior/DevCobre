import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing POST method in /client/:document/info", () => {
  let connection: DataSource;

  interface InfoClient {
    telephone: number;
    email: string;
  }

  interface Client {
    document: string;
    name: string;
    type: string;
  }

  let teste: Client = {
    document: "12345678910",
    name: "Client Test",
    type: "Físico",
  };

  let testInfo: InfoClient = {
    telephone: 12345678901,
    email: "client@mail.com",
  };

  let responseInfo: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    responseInfo = await request(app).post("/client").send(teste);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to create info an client", async () => {
    const response = await request(app)
      .post(`/client/${responseInfo.body.document}/info`)
      .send(testInfo);

    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty("message");
  });

  test("Trying to create information for a client that doesn't exist", async () => {
    const response = await request(app).post("/client/1/info").send(testInfo);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});