import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing GET method in /bank/:id", () => {
  let connection: DataSource;

  interface IBank {
    name: string;
    status: boolean;
  }

  let bank1: IBank = {
    name: "Banco 1",
    status: true,
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

  test("Trying to list a specific bank", async () => {
    const responseGet = await request(app).get(`/bank/${response.body.id}`);

    expect(responseGet.status).toEqual(200);
    expect(responseGet.body).toEqual(
      expect.objectContaining({
        id: response.body.id,
        name: response.body.name,
        status: response.body.status,
      })
    );
  });

  test("Trying to list a specific bank that doesn't exist", async () => {
    const responseGet = await request(app).get(`/bank/0`);

    expect(responseGet.status).toEqual(404);
    expect(responseGet.body).toHaveProperty("message");
  });
});
