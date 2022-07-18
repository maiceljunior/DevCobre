// import { AppDataSource } from "../../data-source";
// import { DataSource } from "typeorm";
// import app from "../../app";
// import request from "supertest";

// describe("Testing GET method in /user", () => {
//   let connection: DataSource;

//   interface User {
//     name: string;
//     email: string;
//     password?: string;
//   }

//   let testUser1: User = {
//     name: "User 1",
//     email: "user1@kenzie.com",
//     password: "123456Ab!",
//   };

//   let testUser: User = {
//     name: "User 2",
//     email: "user2@kenzie.com",
//     password: "123456Ab!",
//   };

//   let testRes1: any;
//   let testRes2: any;

//   beforeAll(async () => {
//     await AppDataSource.initialize()
//       .then((res) => (connection = res))
//       .catch((err) =>
//         console.error("Error during Data Source initialization", err)
//       );

//     testRes1 = await request(app).post("/user").send(testUser1);
//     testRes2 = await request(app).post("/user").send(testUser2);

//     delete testUser1.password;
//     delete testUser2.password;
//   });

//   afterAll(async () => {
//     await connection.destroy();
//   });

//   test("Testing list all users", async () => {
//     const response = await request(app).get("/user");

//     expect(response.status).toEqual(200);
//     expect(response.body.length).toEqual(2);
//     expect(Array.isArray(response.body)).toBe(true);
//     expect(response.body).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           ...testUser1,
//           id: response.body[0].id,
//           created_at: response.body[0].created_at,
//           status: response.body[0].status,
//         }),
//         expect.objectContaining({
//           ...testUser2,
//           id: response.body[1].id,
//           created_at: response.body[1].created_at,
//           status: response.body[1].status,
//         }),
//       ])
//     );
//   });

//   test("Testing to list a single user ", async () => {
//     const response = await request(app).get(`/user/${testRes1.body.id}`);

//     expect(response.status).toEqual(200);
//     expect(response.body).toEqual(
//       expect.objectContaining({
//         id: response.body.id,
//         name: response.body.name,
//         email: response.body.email,
//         created_at: response.body.created_at,
//         status: response.body.status,
//       })
//     );
//   });

//   test("Trying to list an user that doesn't exist", async () => {
//     const response = await request(app).get("/user/x2a");

//     expect(response.status).toEqual(404);
//     expect(response.body).toHaveProperty("message");
//   });
// });
