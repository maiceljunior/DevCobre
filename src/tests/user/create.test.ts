// import { DataSource } from "typeorm";
// import { AppDataSource } from "../../data-source";
// import app from "../../app";
// import request from "supertest";

// describe("Testing POST method in /user", () => {
//   let connection: DataSource;

//   interface User {
//     name: string;
//     email: string;
//     password: string;
//   }

//   let testUser: User = {
//     name: "User Test",
//     email: "user@kenzie.com",
//     password: "123456Ab!",
//   };

//   beforeAll(async () => {
//     await AppDataSource.initialize()
//       .then((res) => (connection = res))
//       .catch((err) => {
//         console.error("Error during Data Source initialization", err);
//       });
//   });

//   afterAll(async () => {
//     await connection.destroy();
//   });

//   test("Trying to create an user", async () => {
//     const response = await request(app).post("/user").send(testUser);

//     expect(response.status).toEqual(201);
//     expect(response.body).toEqual(
//       expect.objectContaining({
//         id: response.body.id,
//         name: response.body.name,
//         email: response.body.email,
//         created_at: response.body.created_at,
//       })
//     );
//   });
//   test("Try to create an user that already exists", async () => {
//     const response = await request(app).post("/user").send(testUser);

//     expect(response.status).toEqual(409);
//     expect(response.body).toHaveProperty("message");
//   });
// });
