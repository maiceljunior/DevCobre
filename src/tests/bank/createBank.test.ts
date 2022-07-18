import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing POST method in /bank", () => {
  let connection: DataSource;

  interface IBank {
    name: string;
    status: boolean;
  }

  let bank1: IBank = {
    name: "Banco 1",
    status: true,
  };

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to create an bank", async () => {
    const response = await request(app).post("/bank").send(bank1);

    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: response.body.id,
        name: response.body.name,
        status: response.body.status,
      })
    );
  });

  test("Try to create an bank that already exists", async () => {
    const response = await request(app).post("/bank").send(bank1);

    expect(response.status).toEqual(409);
    expect(response.body).toHaveProperty("message");
  });
});
