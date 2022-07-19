### <h1 align="center">DevCobre</h1>

<p align="center">O sistema é focado na parte de cobrança de dividas, nas quais ele recebe a informação de dividendos dos banco, assim organizamos de uma forma pratica e rapida para realizar o contato e assim realizar um acordo com o dividendo.</p>

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#api">Api</a> • 
  <a href="#tecnologias">Tecnologias</a> • 
  <a href="#devs">Devs</a> • 
</p>

---

### API

---

<p align="center">
  <a href="#login">Login</a>•
  <a href="#client">Client</a> •
  <a href="#bank">Bank</a> • 
  <a href="#debts">Debts</a> • 
  <a href="#agreement">Agreement</a> • 
  <a href="#user">User</a> • 
  <a href="#contacthistory">Contact History</a> • 
  <a href="#formpayment">Form Payment</a> • 
  
  
</p>

---


### Login
### <h2 style = background-color:gray >Post `/login`</h2>

### Regras:
- `email`,`password`:string

---

### Client

### <h2 style = background-color:gray >Post `/client`</h2>

### Regras:

- `name`,`type`e `document`: string

```json
{
	"document": "89999999999998",
	"name": "Empresa Devedora LTDA",
	"type": "Juridico"
}
```

### Resposta: Status 201 Created

```json
{
	"document": "89999999999998",
	"name": "Empresa Devedora LTDA",
	"type": "Juridico"
}
```

### Resposta: Status 409 Conflict

```json
{
  "message": "Client already exists"
}
```

---

### <h2 style = background-color:gray>Get `/client` (Listar todos os clients)</h2>

### Resposta: Status 200

```json
{
 {
		"document": "11111111111111",
		"name": "Empresa Devedora LTDA",
		"type": "Juridico",
		"clientInfo": []
	},
	{
		"document": "89999999999998",
		"name": "Empresa Devedora LTDA",
		"type": "Juridico",
		"clientInfo": []
	}
}
```

---
### <h2 style = background-color:gray>Get `/client/:document`</h2>

### Resposta: Status 200

```json

{
	"document": "89999999999999",
	"name": "Empresa Devedora LTDA",
	"type": "Juridico",
	"clientInfo": []
}

```

---

### <h2 style = background-color:gray>Patch `/client/:document`</h2>

### Resposta: Status 200 Update

```json
{
  "message": "Updated client"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Client not found!"
}

```

---

### <h2 style = background-color:gray>Delete `/client/:document`</h2>

### Resposta: Status 200

```json
{
  "message": "Client deleted with sucess!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Client not found!"
}
```

---

---

---

<h2>Client info</h2>

### <h2 style = background-color:gray> Post `/client/:document/info`</h2>

### Regras:

- `email` : string
- `telephone` : number

```json
{
  "telephone": 5465448,
  "email": "mail@mail.com"
}
```

### Resposta: Status 201 Created

```json
{
  "message": "Information entered successfully!"
}
```

---
### Resposta: Status 404 Not Found

```json
{
  "message": "Client not found!"
}
```

---

### <h2 style = background-color:gray>Get `/client/:document/info`</h2>

### Resposta: Status 200

```json
{
	"document": "89999999999999",
	"name": "Empresa Devedora LTDA",
	"type": "Juridico",
	"clientInfo": [
		{
			"id": 5,
			"telephone": 5465448,
			"email": "mail@mail.com"
		}
	]
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Client not found"
}
```

---

### <h2 style = background-color:gray>Patch `/client/:document/info/:id`</h2>

```json
{
  "telephone": 22222222,
  "email": "mailtest@mail.com"
}
```

### Resposta: Status 200 Update

```json
{
  "message": "Contact updated with sucess!"
}
```

### Resposta: Status 400 Bad Request

```json
{
  "message": "Client contact not found!"
}
```

---

### Resposta: Status 404 Not Found

```json
{
  "message": "Client not found"
}
```

---

### <h2 style = background-color:gray> Delete `/client/:document/info/:id` </h2>

### Resposta: Status 200

```json
{
  "message": "Contact deleted with sucess!"
}
```

### Resposta: Status 400 Bad Request

```json
{
  "message": "Client contact not found!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Client not found"
}
```

### ClientInfo

### Get `/client/:document/info`

### Resposta: Status 200

```json
{
  "document": 5555555555,
  "name": "Ana Paula",
  "type": "Fisico",
  "clientInfo": []
}
```

---

### Resposta: Status 404 Not Found

```json
{
  "message": "Client not found"
}
```

---

### Post `/client/:id/info`

```json
{
  "telephone": 9999999999,
  "email": "mail1@mail.com"
}
```

### Resposta: Status 201 Created

```json
{
  "message": "Information entered successfully!"
}
```

---

### Resposta: Status 404 Not Found

```json
{
   "message": "Client already exists"
}
```

---

### Patch `/client/:document/info/:idContact`

```json
{
  "telephone": "mailtest@mail.com",
  "telephone": 22222222
}
```

### Resposta: Status 200 Update

```json
{
  "message": "Contact updated with sucess!"
}
```

---

### Resposta: Status 404 Not Found

```json
{
 "message": "Client not found!"
}
```

---

### Delete `/client/:document/info/:idContact`

### Resposta: Status 200

```json
{
  "message": "Contact deleted with sucess!"
}
```

---

### Resposta: Status 404 Not Found

```json
{
   "message": "Client not found!"
}
```

## =======

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### Bank

### Regras :

`name` : string,
`status` : boolean

### <h2 style = background-color:gray>Post `/bank`</h2>

```json
{
  "name": "Banco MaxDev",
  "status": true
}
```

### Resposta: Status 201 Created

```json
{
  "name": "Banco MaxDev",
  "status": true,
  "id": 7
}
```

### Resposta: Status 409 Conflict

```json
{
  "message": "Bank already exists!"
}
```

---

### <h2 style = background-color:gray>Get `/bank`</h2>

### Resposta: Status 200

```json
{
  "id": 7,
  "name": "Banco MaxDev",
  "status": true,
  "bankContact": []
}
```

---

### <h2 style = background-color:gray>Patch `/bank/:id`</h2>

```json
{
  "name": "Banco MaxProPlus"
}
```

### Resposta: Status 200

```json
{
  "message": "Updated Bank!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Bank not found!"
}
```

---

### <h2 style = background-color:gray>Delete `/bank/:id`</h2>

### Resposta: Status 200

```json
{
  "message": "Bank deleted witdh sucess!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Bank not found!"
}
```

---

---

---

<h2>Bank Info </h2>

### Regras :

`email` : string,
`telephone` : number

### <h2 style = background-color:gray>Post `/bank/:id/contact`</h2>

```json
{
  "telephone": 122222,
  "email": "teste@mail.com"
}
```

### Resposta: Status 200 OK

```json
{
  "message": "Information entered successfully!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Bank not found!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "information already exists!"
}
```

### <h2 style = background-color:gray>Get `/bank/id/contact`</h2>

### Resposta: Status 200

```json
{
  "id": 7,
  "name": "Banco MaxProPlus",
  "status": true,
  "bankContact": [
    {
      "id": 2,
      "telephone": 122222,
      "email": "teste@mail.com"
    }
  ]
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Bank not found!"
}
```

---

### <h2 style = background-color:gray>Patch `/bank/:id/contact/:idContact`</h2>

```json
{
  "telephone": 999999999,
  "email": "mail@mail.com"
}
```

### Resposta: Status 200

```json
{
  "message": "Bank Contact updated sucess!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Bank not found!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Bank Contact not found!"
}
```

---

### <h2 style = background-color:gray>Delete `/bank/:id/contact/:idContact`</h2>

### Resposta: Status 200

```json
{
  "message": "Bank contact deleted witdh sucess!"
}
```

### Resposta: Status 404 Not Found

```json
{
	"message": "Bank not found!"
}
```

###  Resposta: Status 404 Not Found


```json
{
	"message": "Bank contact not found!"
}
```

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### Debts


### Post `/debts`

- `bankId`,`documentClient`,`debtValue`,`debtOrigin`,`ipoc` : number

- `debType`,`dateDebt` : string

```**json**
{
		"documentClient": 89999999999999,
		"bankId": 14,
		"debtValue":25141,
		"debtOrigin":4000,
		"debtType":"credito",
	  "ipoc": 25547,
	  "dateDebt":"2020-01-01"
}
```

### Resposta: Status 200 Ok

```json
{
		"documentClient": 89999999999999,
		"bankId": 14,
		"debtValue":25141,
		"debtOrigin":4000,
		"debtType":"credito",
	  "ipoc": 25547,
	  "dateDebt":"2020-01-01"
}
```
###  Resposta: Status 400 Bad Request


```json
{
	"message": "Ipoc already exists!"
}
```

###  Resposta: Status 400 Bad Request


```json
{
	"message": "Client does not exists!"
}
```

###  Resposta: Status 400 Bad Request


```json
{
	"message": "Bank does not exists!"
}
```
---
### Get `/debts`

### Resposta: Status

```json
{
		"id": 4,
		"ipoc": "25155",
		"debtValue": "25141.00",
		"debtOrigin": "4000.00",
		"debtType": "credito",
		"registration": "2022-07-19T18:01:59.509Z",
		"dateDebt": "2020-01-01T00:00:00.000Z",
		"debtStatus": true
	},
	{
		"id": 5,
		"ipoc": "25547",
		"debtValue": "25141.00",
		"debtOrigin": "4000.00",
		"debtType": "credito",
		"registration": "2022-07-19T19:03:21.445Z",
		"dateDebt": "2020-01-01T00:00:00.000Z",
		"debtStatus": true
	},
	{
		"id": 6,
		"ipoc": "25549",
		"debtValue": "25141.00",
		"debtOrigin": "4000.00",
		"debtType": "credito",
		"registration": "2022-07-19T19:06:47.308Z",
		"dateDebt": "2020-01-01T00:00:00.000Z",
		"debtStatus": true
	}
```

### Get `/debts/:id`

### Resposta: Status

```json
{
		"id": 4,
		"ipoc": "25155",
		"debtValue": "25141.00",
		"debtOrigin": "4000.00",
		"debtType": "credito",
		"registration": "2022-07-19T18:01:59.509Z",
		"dateDebt": "2020-01-01T00:00:00.000Z",
		"debtStatus": true
	}
```

---

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---



### Agreement

### Get `/agreement`

### Resposta: Status

```json
{}
```

---

### Post `/agreement`

### Resposta: Status

```json
{}
```

---

### Patch `/agreement/:id`

### Resposta: Status

```json
{}
```

---

### Delete `/agreement/:id`

### Resposta: Status

```json
{}
```

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>


---

### User

### <h2 style = background-color:gray >Post `/user`</h2>

### Regras:

- `name`,`email`,`document` : string

```json
{
  "name": "Pedro Paulo",
  "email": "pedro@mail.com",
  "password": "123456"
}
```

### Resposta: Status 201 Created

```json
{
  "status": true,
  "name": "Pedro Paulo",
  "email": "pedro@mail.com",
  "id": 7,
  "created_at": "2022-07-16T17:31:13.121Z",
  "updated_at": "2022-07-16T17:31:13.121Z"
}
```

### Resposta: Status 409 Conflict

```json
{
  "message": "Email already exists"
}
```

---

### <h2 style = background-color:gray>Get `/user` (Listar todos os funcionarios)</h2>

### Resposta: Status 200

```json
{
  "status": true,
  "id": 7,
  "name": "Pedro Paulo",
  "email": "pedro@mail.com",
  "created_at": "2022-07-16T17:31:13.121Z",
  "updated_at": "2022-07-16T17:31:13.121Z",
  "userInfo": []
}
```

---

### <h2 style = background-color:gray>GET `/user/:id`</h2>

### Resposta: Status 200 Update

```json
{
  "status": true,
  "id": 7,
  "name": "Pedro Paulo",
  "email": "pedro@mail.com",
  "created_at": "2022-07-16T17:31:13.121Z",
  "updated_at": "2022-07-16T17:31:13.121Z",
  "userInfo": []
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "User not found!"
}
```

---

### <h2 style = background-color:gray>Patch `/user/:id`</h2>

```json
{
  "name": "Pedro Paulo Pietro",
  "email": "PPP@mail.com"
}
```

### Resposta: Status 200

```json
{
  "message": "User updated!"
}
```

### Resposta: Status 400 Bad Request

```json
{
  "message": "User does not exists!"
}
```

### <h2 style = background-color:gray>Delete `/user/:id`</h2>

### Resposta: Status 200

```json
{
  "message": "User deleted with sucess!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "User not found!"
}
```

---

---

---

<h2>User info</h2>

### <h2 style = background-color:gray> Post `/user/:id/info`</h2>

### Regras:

- `telephone` : number
- `address` : string

```json
{
  "telephone": 999999999,
  "address": "Rua 1"
}
```

### Resposta: Status 201 Created

```json
{
  "telephone": 999999999,
  "address": "Rua 1",
  "user": {
    "status": true,
    "id": 7,
    "name": "Pedro Paulo Pietro",
    "email": "PPP@mail.com",
    "password": "$2a$10$TJDRXDSfJ0oqxr7ClLPsxORwYqvg9CEpJeY/Dqg5pJHzfBWKyj4Fe",
    "created_at": "2022-07-16T17:31:13.121Z",
    "updated_at": "2022-07-16T17:36:32.891Z",
    "userInfo": []
  },
  "id": 1
}
```

---

### <h2 style = background-color:gray>Get `/user/:id/info`</h2>

### Resposta: Status 200

```json
{
  "status": true,
  "id": 7,
  "name": "Pedro Paulo Pietro",
  "email": "PPP@mail.com",
  "password": "$2a$10$TJDRXDSfJ0oqxr7ClLPsxORwYqvg9CEpJeY/Dqg5pJHzfBWKyj4Fe",
  "created_at": "2022-07-16T17:31:13.121Z",
  "updated_at": "2022-07-16T17:36:32.891Z",
  "userInfo": [
    {
      "id": 1,
      "telephone": 999999999,
      "address": "Rua 1"
    }
  ]
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "User not found!"
}
```

---

### <h2 style = background-color:gray>Patch `/user/:id/info/:idInfo`</h2>

```json
{
  "telephone": 8888888,
  "address": "Rua 5"
}
```

### Resposta: Status 200 Update

```json
{
  "message": "User updated with success"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "User info not found!"
}
```

---

### Resposta: Status 404 Not Found

```json
{
  "message": "User not found!"
}
```

---

### <h2 style = background-color:gray> Delete `/user/:id/info/:idInfo` </h2>

### Resposta: Status 200

```json
{
  "message": "User Info delete with success!"
}
```

### Resposta: Status 400 Bad Request

```json
{
  "message": "User contact not found!"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "User info not found!"
}
```

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>


### ContactHistory

---
### Post `/history`
- `date_contact`,`note`: string
- `debtId`,`userId`:number
- `agreement`: boolean


```json
{
	"date_contact":"2022-01-01",
	"agreement":false,
	"note":"faltou ligar",
	"debtId":5,
	"userId":2
}
```
### Resposta: Status 201 Created

```json
{
	"date": "2022-01-01",
	"agreement": false,
	"note": "faltou ligar",
	"debts": 5,
	"user_entry_contact": "Maicel"
}
```

---



### Get `/history`

### Resposta: Status

```json
{
		"id": 7,
		"agreement": false,
		"date_contact": "2022-01-01T00:00:00.000Z",
		"note": "faltou ligar"
}
```

---


### Patch `/history/:id`
 - `note`,`date_contact`: string
 - `agreement`: boolean



```json
{
	"note":"cliente atendeu mas não quis negociar",
	"date_contact":"2022-07-19"
}
```

### Resposta: Status 200 Ok

```json
{
	"message": "Update contact History"
}
```

### Resposta: Status 400 Not Found

```json
{
	"message": "Contact history not found!"
}
```

---

### Delete `/history/:id`

### Resposta: Status 200
```json
{
	"message": "Contact history not found!"
}
```

### Resposta: Status 404 Not Found

```json
{
	"message": "Contact history not found!"
}
```

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### formpayment


### Post `/payment`

- `cash_payment`,`installments`,`entry_installments`: boolean
- `entry`,`installments_times`,`values_installments`,`debtsId`: number

```json
{
	
	"cash_payment":true,
	"installments":false,
	"entry_installments":false,
	"entry":5000,
	"installments_times":50,
	"values_installments":0,
	"debtsId":4
	
}
```
### Resposta: Status 201 Created

```json
{
	"cash_payment": true,
	"installments": false,
	"entry_installments": false,
	"entry": 5000,
	"installments_times": 50,
	"values_installments": 0,
	"debts": {
		"id": 4,
		"ipoc": "25155",
		"debtValue": "25141.00",
		"debtOrigin": "4000.00",
		"debtType": "credito",
		"registration": "2022-07-19T18:01:59.509Z",
		"dateDebt": "2020-01-01T00:00:00.000Z",
		"debtStatus": true
	},
	"id": 9
}
```

### Resposta: Status 400 Bad Request

```json
{
	"message": "Select only one payment method!"
}
```
### Resposta: Status 400 Bad Request

```json
{
	"error": "ValidationError"
}
```
---

### Get `/payment`

### Resposta: Status

```json
{
		"id": 8,
		"cash_payment": true,
		"installments": false,
		"entry_installments": false,
		"entry": "5000.00",
		"installments_times": 50,
		"values_installments": "0.00"
	},
	{
		"id": 9,
		"cash_payment": true,
		"installments": false,
		"entry_installments": false,
		"entry": "5000.00",
		"installments_times": 50,
		"values_installments": "0.00"
	}
```

---

### Get `/payment/:id`

### Resposta: Status

```json
{
		"id": 8,
		"cash_payment": true,
		"installments": false,
		"entry_installments": false,
		"entry": "5000.00",
		"installments_times": 50,
		"values_installments": "0.00"
}
```

---


<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)

### Devs

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/danilovalerio89"><img style="border-radius: 50%; border: solid 1.5px white;" src="https://ca.slack-edge.com/TQZR39SET-U02ETCPV8SY-bc58de584a43-512" width="100px;" alt=""/><br /><sub><b>Danilo Valerio</b></sub></a><br /><a href="https://github.com/danilovalerio89">🚀</a></td>
    <td align="center"><a href="https://github.com/letlm"><img style="border-radius: 50%; border: solid 1.5px white;" src="https://ca.slack-edge.com/TQZR39SET-U02J9FMNS8J-603a5fcda229-512" width="100px;" alt=""/><br /><sub><b>Letícia Leal</b></sub></a><br /><a href="https://github.com/letlm" title="">🚀</a></td>
    <td align="center"><a href="https://github.com/bosilveira/"><img style="border-radius: 50%; border: solid 1.5px white;" src="https://ca.slack-edge.com/TQZR39SET-U02LAFPR37E-58bb2dda437e-512" width="100px;" alt=""/><br /><sub><b>Bráulio Silveira</b></sub></a><br /><a href="https://github.com/bosilveira/" title="">🚀</a></td>
    <td align="center"><a href="https://github.com/maiceljunior"><img style="border-radius: 50%; border: solid 1.5px white;" src="https://ca.slack-edge.com/TQZR39SET-U02KF6MJTBP-8b86e36a01cc-512" width="100px;" alt=""/><br /><sub><b>Maciel A. Junior</b></sub></a><br /><a href="https://github.com/maiceljunior" title="">🚀</a></td>
    <td align="center"><a href="https://github.com/vinistm"><img style="border-radius: 50%; border: solid 1.5px white;" src="https://ca.slack-edge.com/TQZR39SET-U02MF715MJM-368f2a6dba44-512" width="100px;" alt=""/><br /><sub><b>Vinícius Martins</b></sub></a><br /><a href="https://github.com/vinistm" title="">🚀</a></td>
    <td align="center"><a href="https://github.com/vitorschmidt"><img style="border-radius: 50%; border: solid 1.5px white;" src="https://ca.slack-edge.com/TQZR39SET-U02JSJ0P7GB-c6967afadbe8-512" width="100px;" alt=""/><br /><sub><b>Vitor Schmidt</b></sub></a><br /><a href="https://github.com/vitorschmidt" title="">🚀</a></td>
</tr>
    
</table>

<p align="center">
 • <a href="#devcobre">Inicio</a> •
 
</p>
