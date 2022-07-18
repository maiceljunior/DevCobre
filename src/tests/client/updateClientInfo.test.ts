import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing PATCH method in /client/:document/info/:idContact", () => {
  let connection: DataSource;

  interface Client {
    document: string;
    name: string;
    type: string;
  }

  interface InfoClient {
    telephone: number;
    email: string;
  }

  let testClient: Client = {
    document: "12345678910",
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

  test("Trying to update a client's information", async () => {
    const get = await request(app).get(
      `/client/${response.body.document}/info`
    );
    const info = get.body.clientInfo[0].id;

    const responsePatch = await request(app)
      .patch(`/client/${response.body.document}/info/${info}`)
      .send(testInfo.email);

    const responseGet = await request(app).get(
      `/client/${response.body.document}/info`
    );

    expect(responsePatch.status).toEqual(200);
    expect(responsePatch.body).toHaveProperty("message");

    expect(responseGet.body).toEqual(
      expect.objectContaining({
        document: response.body.document,
        name: response.body.name,
        type: response.body.type,
        clientInfo: [
          {
            id: info,
            telephone: get.body.clientInfo[0].telephone,
            email: testInfo.email,
          },
        ],
      })
    );
  });

  test("Trying to update missing information from an existing client", async () => {
    const responsePatch = await request(app)
      .patch(`/client/${response.body.document}/info/0`)
      .send(testInfo.email);

    expect(responsePatch.status).toEqual(400);
    expect(responsePatch.body).toHaveProperty("message");
  });

  test("Trying to update information for a client that does not exist", async () => {
    const response = await request(app)
      .patch("/client/1/info/0")
      .send(testInfo);

    expect(response.status).toEqual(400);
    expect(response.body).toHaveProperty("message");
  });
});
