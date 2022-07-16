import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing DELETE method in /client/:document/info/:idContact", () => {
  let connection: DataSource;

  interface Client {
    document: number;
    name: string;
    type: string;
  }

  interface InfoClient {
    telephone: number;
    email: string;
  }

  let testClient: Client = {
    document: 12345678910,
    name: "Client Test",
    type: "Físico",
  };

  let testInfo: InfoClient = {
    telephone: 12345678901,
    email: "client@mail.com",
  };

  let response: any;
  let responseInfo: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    response = await request(app).post("/client").send(testClient);
    responseInfo = await request(app)
      .post(`/client/${response.body.document}/info`)
      .send(testInfo);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to delete a client's information", async () => {
    const get = await request(app).get(
      `/client/${response.body.document}/info`
    );
    const info = get.body.clientInfo[0].id;

    const responseDelete = await request(app).delete(
      `/client/${response.body.document}/info/${info}`
    );

    const responseGet = await request(app).get(
      `/client/${response.body.document}/info`
    );

    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toHaveProperty("message");

    expect(responseGet.body).toEqual(
      expect.objectContaining({
        document: response.body.document,
        name: response.body.name,
        type: response.body.type,
      })
    );
  });

  test("Trying to delete missing information from an existing client", async () => {
    const responseDelete = await request(app).delete(
      `/client/${response.body.document}/info/0`
    );

    expect(responseDelete.status).toEqual(404);
    expect(responseDelete.body).toHaveProperty("message");
  });

  test("Trying to update information for a client that does not exist", async () => {
    const response = await request(app).delete("/client/1/info/0");

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
