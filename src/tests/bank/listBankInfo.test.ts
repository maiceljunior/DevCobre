import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import app from "../../app";
import request from "supertest";

describe("Testing GET method in /bank/:id/contact", () => {
  let connection: DataSource;

  interface IBank {
    name: string;
    status: boolean;
  }

  interface IBankInfo {
    telephone: number;
    email: string;
  }

  let bank1: IBank = {
    name: "Banco 1",
    status: true,
  };

  let bank2: IBank = {
    name: "Banco 2",
    status: true,
  };

  let info1: IBankInfo = {
    telephone: 45612312,
    email: "bank@mail.com",
  };

  let info2: IBankInfo = {
    telephone: 9995555,
    email: "bank2@mail.com",
  };

  let responseBank1: any;
  let responseBank2: any;
  let responseInfo1: any;
  let responseInfo2: any;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    responseBank1 = await request(app).post("/bank").send(bank1);
    responseInfo1 = await request(app)
      .post(`/bank/${responseBank1.body.id}/contact`)
      .send(info1);
    responseInfo2 = await request(app)
      .post(`/bank/${responseBank1.body.id}/contact`)
      .send(info2);
    responseBank2 = await request(app).post("/bank").send(bank2);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Trying to list a bank and their contacts", async () => {
    const responseGet = await request(app).get(
      `/bank/${responseBank1.body.id}/contact`
    );

    expect(responseGet.status).toEqual(200);
    expect(responseGet.body).toEqual(
      expect.objectContaining({
        id: responseBank1.body.id,
        name: responseBank1.body.name,
        status: responseBank1.body.status,
        bankContact: [
          {
            id: responseGet.body.bankContact[0].id,
            telephone: responseGet.body.bankContact[0].telephone,
            email: responseGet.body.bankContact[0].email,
          },
          {
            id: responseGet.body.bankContact[1].id,
            telephone: responseGet.body.bankContact[1].telephone,
            email: responseGet.body.bankContact[1].email,
          },
        ],
      })
    );
  });

  test("Trying to list a bank with no information", async () => {
    const responseGet = await request(app).get(
      `/bank/${responseBank2.body.id}/contact`
    );

    expect(responseGet.status).toEqual(200);
    expect(responseGet.body).toEqual(
      expect.objectContaining({
        id: responseGet.body.id,
        name: responseGet.body.name,
        status: responseGet.body.status,
      })
    );
  });

  test("Trying to list a bank that doesn't exist with contact", async () => {
    const response = await request(app).get("/bank/0/contact");

    expect(response.status).toEqual(404);
    expect(response.body).toHaveProperty("message");
  });
});
