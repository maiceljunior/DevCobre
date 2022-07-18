import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing DELETE method in /bank/:id/contact/:idContact", () => {
  let connection: DataSource;

  interface IBank {
    name: string;
    status: boolean;
  }

  interface IBankInfo {
    telephone: number;
    email: string;
  }

  let bank1: IBank = {
    name: "Banco 1",
    status: true,
  };

  let info1: IBankInfo = {
    telephone: 45612312,
    email: "bank@mail.com",
  };

  let response: any;
  let responseInfo: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    response = await request(app).post("/bank").send(bank1);
    responseInfo = await request(app)
      .post(`/bank/${response.body.id}/contact`)
      .send(info1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to delete a bank's contact", async () => {
    const responseGet = await request(app).get(
      `/bank/${response.body.id}/contact`
    );
    const idContact = responseGet.body.bankContact[0].id;

    const responseDelete = await request(app).delete(
      `/bank/${response.body.id}/contact/${idContact}`
    );

    expect(responseDelete.status).toEqual(200);
    expect(responseDelete.body).toHaveProperty("message");

    expect(responseGet.body).toEqual(
      expect.objectContaining({
        id: response.body.id,
        name: response.body.name,
        status: response.body.status,
      })
    );
  });

  test("Trying to delete missing information from an existing bank", async () => {
    const responsePatch = await request(app).delete(
      `/bank/${response.body.id}/contact/0`
    );

    expect(responsePatch.status).toEqual(404);
    expect(responsePatch.body).toHaveProperty("message");
  });

  test("Trying to delete information for a bank that does not exist", async () => {
    const response = await request(app).delete("/bank/0/contact/0");
    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
