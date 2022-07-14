### DevCobre
<p align="center">Criação de sistema que recebe uma lista de dividas, nas quais teremos informações desses clientes no banco, assim podendo entrar em contato com e negociando o valor da divida do cliente perante o banco.</p>


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
  <a href="#client">Client</a> •
  <a href="#bank">Bank</a> • 
  <a href="#debts">Debts</a> • 
  <a href="#agreement">Agreement</a> • 
  
</p>

---

### Client

### Get `/client`


### Resposta: Status 200
```json
{
    "document": 5555555555,
    "name": "Ana Paula",
    "type": "Fisico"
}
```
---
### Get `/client/:document/info`


### Resposta: Status 200
```json
{
    "document": 5555555555,
    "name": "Ana Paula",
    "type": "Fisico"
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

### Post `/client`


### Regras:
- `name`,`type` e `document`: precisam ser uma string.


```json
{
    "name": "Empresa Devedora LTDA",
    "type": "Juridico"
}
```
### Resposta: Status 201 Created
```json
{
    "document": 5555555555,
    "name": "Empresa Devedora LTDA",
    "type": "Juridico"
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

### Patch `/client/:document`


### Resposta: Status 200 Update
```json
{
	"message": "Updated client"
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

### Delete `/client/:document`


### Resposta: Status 200
```json
{
	"message": "Client deleted with sucess!"
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
<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>

---
### Bank

### Get `/bank`


### Resposta: Status 200
```json
  {
		"id": 1,
		"name": "Bank1",
		"status": true
	}
```
---

### Post `/bank`
```json
{
    "name": "Bank1",
    "status": true
}
```

### Resposta: Status 
```json
{
	"name": "Bank1",
	"status": true,
	"id": 1
}
```
---
### Resposta: Status 404 Not Found
```json
{
	"status": "error",
	"code": 400,
	"message": "Bank already exists!"
}
```
---

### Patch `/bank/:id`

```json
{
	"name": "New Bank"
}
```
---

### Resposta: Status 200
```json
{
	"message": "Updated Bank!"
}
```
---
### Resposta: Status 404 Not Found
```json
{
	"status": "error",
	"code": 404,
	"message": "Bank not found!"
}
```
---
### Delete `/bank/:id`


### Resposta: Status 200
```json
{
	"message": "Bank deleted witdh sucess!"
}
```
---
### Resposta: Status 404 Not Found
```json
{
	"status": "error",
	"code": 404,
	"message": "Bank not found!"
}
```
<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>
---

### Debts

### Get `/debts`


### Resposta: Status 
```json
{
   
}
```
---

### Post `/debts`


### Resposta: Status 
```json
{
   
}
```
---

### Patch `/debts/:id`


### Resposta: Status 
```json
{
   
}
```
---

### Delete `/debts/:id`


### Resposta: Status 
```json
{
   
}
```

<p align="center">
 • <a href="#api">Inicio API</a> •
 
</p>
---

### Agreement

### Get `/agreement`


### Resposta: Status 
```json
{
   
}
```
---

### Post `/agreement`


### Resposta: Status 
```json
{
   
}
```
---

### Patch `/agreement/:id`


### Resposta: Status 
```json
{
   
}
```
---

### Delete `/agreement/:id`


### Resposta: Status 
```json
{
   
}
```
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

<table>
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