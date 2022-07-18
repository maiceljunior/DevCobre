import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing POST method in /bank/:id/contact", () => {
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

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    response = await request(app).post("/bank").send(bank1);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to create info a bank", async () => {
    const responsePost = await request(app)
      .post(`/bank/${response.body.id}/contact`)
      .send(info1);

    expect(responsePost.status).toEqual(200);
    expect(responsePost.body).toHaveProperty("message");
  });

  test("Try to create contact for a bank that doesn't exist", async () => {
    const response = await request(app).post("/bank/0/contact").send(info1);

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
