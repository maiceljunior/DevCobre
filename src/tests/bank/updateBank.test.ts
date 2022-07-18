import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing PATCH method in /bank/:id", () => {
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

  test("Trying to update a bank", async () => {
    const responsePatch = await request(app)
      .patch(`/bank/${response.body.id}`)
      .send(bank1);

    expect(responsePatch.status).toEqual(200);
    expect(responsePatch.body).toHaveProperty("message");
    // expect(responsePatch.body).toEqual(
    //   expect.objectContaining({
    //     id: response.body.id,
    //     name: bank1.name,
    //     status: response.body.status,
    //   })
    // );
  });

  test("Try to update a bank that doesn't exist", async () => {
    const response = await request(app).patch("/bank/0");

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
