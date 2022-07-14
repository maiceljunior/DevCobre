import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing POST method in /employee", () => {
  let connection: DataSource;

  interface Employee {
    name: string;
    email: string;
    password: string;
  }

  let testEmployee: Employee = {
    name: "Employee Test",
    email: "employee@kenzie.com",
    password: "123456Ab!",
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

  test("Trying to create an employee", async () => {
    const response = await request(app).post("/employee").send(testEmployee);

    expect(response.status).toEqual(201);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: response.body.id,
        name: response.body.name,
        email: response.body.email,
        created_at: response.body.created_at,
      })
    );
  });
  // test("Try to create an employee that already exists", async () => {
  //   const response = await request(app).post("/employee").send(testEmployee);

  //   expect(response.status).toEqual(409);
  //   expect(response.body).toHaveProperty("message");
  // });
});
