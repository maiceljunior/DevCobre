// import { AppDataSource } from "../../data-source";
// import { DataSource } from "typeorm";
// import app from "../../app";
// import request from "supertest";

// describe("Testing DELETE method in /employee/:id", () => {
//   let connection: DataSource;
//   interface Employee {
//     name: string;
//     email: string;
//     password?: string;
//     status: boolean;
//   }

//   let testEmployee: Employee = {
//     name: "Employee Test",
//     email: "employee@kenzie.com",
//     password: "123456Ab!",
//     status: true,
//   };

//   let deletedEmployee: Employee = {
//     name: "Employee Test",
//     email: "employee@kenzie.com",
//     status: false,
//   };

//   let testRes1: any;

//   beforeAll(async () => {
//     await AppDataSource.initialize()
//       .then((res) => (connection = res))
//       .catch((err) =>
//         console.error("Error during Data Source initialization", err)
//       );

//     testRes1 = await request(app).post("/employee").send(testEmployee);

//     delete testEmployee.password;
//   });

//   afterAll(async () => {
//     await connection.destroy();
//   });

//   test("Trying to delete an employee", async () => {
//     const response = await request(app)
//       .patch(`/employee/${testRes1.body.id}`)
//       .send(deletedEmployee);

//     const newResponse = await request(app).get(`/employee/${testRes1.body.id}`);

//     expect(response.status).toEqual(200);
//     expect(response.body).toHaveProperty("message");

//     expect(newResponse.body).toEqual(
//       expect.objectContaining({
//         id: newResponse.body.id,
//         name: deletedEmployee.name,
//         email: deletedEmployee.email,
//         created_at: newResponse.body.created_at,
//         status: newResponse.status,
//       })
//     );
//   });

//   test("Trying to delete an employee that doesn't exist", async () => {
//     const response = await request(app).delete("/employee/x2a");

//     expect(response.status).toEqual(404);
//     expect(response.body).toHaveProperty("message");
//   });
// });
