import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import app from "../../app";
import request from "supertest";

describe("Testing GET method in /employee", () => {
  let connection: DataSource;

  interface Employee {
    name: string;
    email: string;
    password?: string;
  }

  let testEmployee1: Employee = {
    name: "Employee 1",
    email: "employee1@kenzie.com",
    password: "123456Ab!",
  };

  let testEmployee2: Employee = {
    name: "Employee 2",
    email: "employee2@kenzie.com",
    password: "123456Ab!",
  };

  let testRes1: any;
  let testRes2: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during Data Source initialization", err)
      );

    testRes1 = await request(app).post("/employee").send(testEmployee1);
    testRes2 = await request(app).post("/employee").send(testEmployee2);

    delete testEmployee1.password;
    delete testEmployee2.password;
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Testing list all employees", async () => {
    const response = await request(app).get("/employee");

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...testEmployee1,
          id: response.body[0].id,
          created_at: response.body[0].created_at,
          status: response.body[0].status,
        }),
        expect.objectContaining({
          ...testEmployee2,
          id: response.body[1].id,
          created_at: response.body[1].created_at,
          status: response.body[1].status,
        }),
      ])
    );
  });

  test("Testing to list a single employee ", async () => {
    const response = await request(app).get(`/employee/${testRes1.body.id}`);

    expect(response.status).toEqual(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: response.body.id,
        name: response.body.name,
        email: response.body.email,
        created_at: response.body.created_at,
        status: response.body.status,
      })
    );
  });

  test("Trying to list an employee that doesn't exist", async () => {
    const response = await request(app).get("/employee/x2a");

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
