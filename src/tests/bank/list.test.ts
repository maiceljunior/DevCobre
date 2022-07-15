import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing GET method in /bank", () => {
  let connection: DataSource;

  interface IBank {
    name: string;
    status: boolean;
  }

  let bank1: IBank = {
    name: "Banco 1",
    status: true,
  };

  let bank2: IBank = {
    name: "Banco 2",
    status: true,
  };

  let resBank1: any;
  let resBank2: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    resBank1 = await request(app).post("/bank").send(bank1);
    resBank2 = await request(app).post("/bank").send(bank2);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Testing list all banks", async () => {
    const response = await request(app).get("/bank");

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...bank1,
          id: response.body[0].id,
        }),
        expect.objectContaining({
          ...bank2,
          id: response.body[1].id,
        }),
      ])
    );
  });

  test;
});
