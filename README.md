### DevCobre
<p align="center">Criação de sistema que recebe uma lista de dividas, nas quais teremos informações desses clientes no banco, assim podendo entrar em contato com e negociando o valor da divida do cliente perante o banco.</p>


<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#api">Api</a> • 
  <a href="#tecnologias">Tecnologias</a> • 
  <a href="#devs">Devs</a> • 
</p>

### API


---


### Get `/client`


### Resposta: Status 200
```json
{
    "id": 2,
    "name": "Ana Paula",
    "type": "Fisico"
}
```
---


### Post `/client`
### Regras:
- `name` e `type`: precisam ser uma string.


```json
{
    "name": "Empresa Devedora LTDA",
    "type": "Juridico"
}
```
### Resposta: Status 201 Created
```json
{
    "id": 1,
    "name": "Empresa Devedora LTDA",
    "type": "Juridico"
}
```
---

### Patch `/client/:id`


### Resposta: Status 
```json
{
   
}
```
---

### Delete `/client/:id`


### Resposta: Status 
```json
{
   
}
```
---

### Get `/bank`


### Resposta: Status 
```json
{
   
}
```
---

### Post `/bank`


### Resposta: Status 
```json
{
   
}
```
---

### Patch `/bank/:id`


### Resposta: Status 
```json
{
   
}
```
---

### Delete `/bank/:id`


### Resposta: Status 
```json
{
   
}
```
---

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
---

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
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/91745489?v=4" width="100px;" alt=""/><br /><sub><b>Danilo Valerio</b></sub></a><br /><a href="">🚀</a></td>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/79205151?v=4" width="100px;" alt=""/><br /><sub><b>Letícia Leal</b></sub></a><br /><a href="" title="">🚀</a></td>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/63247376?v=4" width="100px;" alt=""/><br /><sub><b>Bráulio Silveira</b></sub></a><br /><a href="" title="">🚀</a></td>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/54657043?v=4" width="100px;" alt=""/><br /><sub><b>Maciel A. Junior</b></sub></a><br /><a href="" title="">🚀</a></td>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://ca.slack-edge.com/TQZR39SET-U02JSJ0P7GB-c6967afadbe8-512" width="100px;" alt=""/><br /><sub><b>Vitor Schmidt</b></sub></a><br /><a href="" title="">🚀</a></td>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://ca.slack-edge.com/TQZR39SET-U02MF715MJM-368f2a6dba44-512" width="100px;" alt=""/><br /><sub><b>Vinícius Martins</b></sub></a><br /><a href="" title="">🚀</a></td>
</tr>
    
</table>

<p align="center">
 • <a href="#devcobre">Inicio</a> •
 
</p>