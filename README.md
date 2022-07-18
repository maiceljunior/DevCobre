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
•
  <a href="#client">Client</a> •
  <a href="#bank">Bank</a> • 
  <a href="#debts">Debts</a> • 
  <a href="#debttype">Debt Type</a> • 
  <a href="#agreement">Agreement</a> • 
  <a href="#agreementstatus">Agreement Status</a> • 
  <a href="#user">User</a> • 
  <a href="#levelacess">Level Acess</a> • 
  <a href="#contacthistory">Contact History</a> • 
  <a href="#formpayment">Form Payment</a> • 
  
  
</p>

---

### Client

<<<<<<< HEAD

### Get `/client/:id`

=======

> > > > > > > 1823c60959be2bdf732e21ffe662c6092b43126e

### <h2 style = background-color:gray >Post `/client`</h2>

### Regras:

- `name`,`type` : string
- `document` : number

```json
{
  "documente": 899999999,
  "name": "Empresa Devedora LTDA",
  "type": "Juridico"
}
```

### Resposta: Status 201 Created

```json
{
  "documente": 899999999,
  "name": "Empresa Devedora LTDA",
  "type": "Juridico"
}
```

### Resposta: Status 404 Not Found

```json
{
  "message": "Client already exists"
}
```

---

<<<<<<< HEAD

=======

### <h2 style = background-color:gray>Get `/client` (Listar todos os clients)</h2>

### Resposta: Status 200

```json
{
    {
		"document": 899999999,
		"name": "Empresa Devedora LTDA",
		"type": "Juridico",
		"clientInfo": []
	}
}
```

---

> > > > > > > 1823c60959be2bdf732e21ffe662c6092b43126e

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
  "status": "error",
  "code": 404,
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
  "status": "error",
  "code": 404,
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

### <h2 style = background-color:gray>Get `/client/:document/info`</h2>

### Resposta: Status 200

```json
{
  "document": 899999999,
  "name": "Empresa Devedora LTDA",
  "type": "Juridico",
  "clientInfo": [
    {
      "id": 4,
      "telephone": 5465448,
      "email": "mail@mail.com"
    }
  ]
}
```

### Resposta: Status 404 Not Found

```json
{
  "status": "error",
  "code": 404,
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

<<<<<<< HEAD

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
  "status": "error",
  "code": 404,
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
  "status": "error",
  "code": 404,
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
  "status": "error",
  "code": 404,
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
  "status": "error",
  "code": 404,
  "message": "Client not found!"
}
```

## =======

> > > > > > > 1823c60959be2bdf732e21ffe662c6092b43126e

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

````json
{
	"message": "Bank not found!"
}
### Resposta: Status 404 Not Found
```json
{
	"message": "Bank contact not found!"
}
````

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### Debts

### Get `/debts`

### Resposta: Status

```json
{}
```

---

### Post `/debts`

### Resposta: Status

```json
{}
```

---

### Patch `/debts/:id`

### Resposta: Status

```json
{}
```

---

### Delete `/debts/:id`

### Resposta: Status

```json
{}
```

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### DebtType

### Get `/type`

### Resposta: Status

```json
{}
```

---

### Post `/type`

### Resposta: Status

```json
{}
```

---

### Patch `/type/:id`

### Resposta: Status

```json
{}
```

---

### Delete `/type/:id`

### Resposta: Status

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

### AgreementStatus

### Get `/status`

### Resposta: Status

```json
{}
```

---

### Post `/status`

### Resposta: Status

```json
{}
```

---

### Patch `/status/:id`

### Resposta: Status

```json
{}
```

---

### Delete `/status/:id`

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

---

### levelAcess

### Get `/level`

### Resposta: Status

```json
{}
```

---

### Post `/level`

### Resposta: Status

```json
{}
```

---

### Patch `/level/:id`

### Resposta: Status

```json
{}
```

---

### Delete `/level/:id`

### Resposta: Status

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### ContactHistory

### Get `/history`

### Resposta: Status

```json
{}
```

---

### Post `/history`

### Resposta: Status

```json
{}
```

---

### Patch `/history/:id`

### Resposta: Status

```json
{}
```

---

### Delete `/history/:id`

### Resposta: Status

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---

### formpayment

### Get `/payment`

### Resposta: Status

```json
{}
```

---

### Post `/payment`

### Resposta: Status

```json
{}
```

---

### Patch `/payment/:id`

### Resposta: Status

```json
{}
```

---

### Delete `/payment/:id`

### Resposta: Status

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
