// import { AppDataSource } from "../../data-source";
// import { DataSource } from "typeorm";
// import app from "../../app";
// import request from "supertest";

// describe("Testing DELETE method in /user/:id", () => {
//   let connection: DataSource;
//   interface User {
//     name: string;
//     email: string;
//     password?: string;
//     status: boolean;
//   }

//   let testUser: User = {
//     name: "User Test",
//     email: "user@kenzie.com",
//     password: "123456Ab!",
//     status: true,
//   };

//   let deletedUser: User = {
//     name: "User Test",
//     email: "user@kenzie.com",
//     status: false,
//   };

//   let testRes1: any;

//   beforeAll(async () => {
//     await AppDataSource.initialize()
//       .then((res) => (connection = res))
//       .catch((err) =>
//         console.error("Error during Data Source initialization", err)
//       );

//     testRes1 = await request(app).post("/user").send(testUser);

//     delete testUser.password;
//   });

//   afterAll(async () => {
//     await connection.destroy();
//   });

//   test("Trying to delete an user", async () => {
//     const response = await request(app)
//       .patch(`/user/${testRes1.body.id}`)
//       .send(deletedUser);

//     const newResponse = await request(app).get(`/user/${testRes1.body.id}`);

//     expect(response.status).toEqual(200);
//     expect(response.body).toHaveProperty("message");

//     expect(newResponse.body).toEqual(
//       expect.objectContaining({
//         id: newResponse.body.id,
//         name: deletedUser.name,
//         email: deletedUser.email,
//         created_at: newResponse.body.created_at,
//         status: newResponse.status,
//       })
//     );
//   });

//   test("Trying to delete an user that doesn't exist", async () => {
//     const response = await request(app).delete("/user/x2a");

//     expect(response.status).toEqual(404);
//     expect(response.body).toHaveProperty("message");
//   });
// });
