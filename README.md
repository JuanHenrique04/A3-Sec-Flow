<h1>A3 - Teoria da computação e compiladores</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=React&message=framework&color=blue&style=for-the-badge&logo=React"/>
  <img src="https://img.shields.io/static/v1?label=Next&message=framework&color=green&style=for-the-badge&logo=nextdotjs"/>
  <img src="http://img.shields.io/static/v1?label=Prisma&message=ORM&color=yellow&style=for-the-badge&logo=Prisma"/>
  <img src="http://img.shields.io/static/v1?label=OAuth&message=Auth.js&color=yellow&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=PostgresSql&message=DataBase&color=red&style=for-the-badge&logo=postgresql"/>
  <img src="https://img.shields.io/static/v1?label=Docker&message=Container&color=blue&style=for-the-badge&logo=docker"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=Finalizado&color=green&style=for-the-badge"/>
</p>

> Status do Projeto: ✔️ Finalizado.

### Tópicos 

:small_blue_diamond: [Descrição do Projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Como rodar a Aplicação Web Local](#como-rodar-a-aplicação-web-local-computer)

:small_blue_diamond: [Layout da Aplicação](#layout-da-aplicação-computer)

:small_blue_diamond: [Linguagens, dependencias e libs utilizadas](#linguagens-dependencias-e-libs-utilizadas-books)

:small_blue_diamond: [Desenvolvedor](#desenvolvedor-octocat)

:small_blue_diamond: [Rotas API](#rotas-api)

## Descrição do projeto 

<p>
  Projeto FullStack de uma ferramenta para gerar relatórios de pentests e assessments de segurança, desenvolvido utilizando as tecnologias React, Next.js, JavaScript e Auth.js
</p>

## Funcionalidades

:heavy_check_mark: Realizar login via GitHub para utilizar o programa; 

:heavy_check_mark: Registrar achados dos testes de segurança;

:heavy_check_mark: Vizualizar dados registrados;

:heavy_check_mark: Imprimir e / ou realizar download csv.

## Como rodar a Aplicação Web Local :computer:
> Para instalar as dependências e tecnologias do projeto FrontEnd digite em seu terminal:
```sh
cd .\sec-flow\
```
```sh
npm install
```
> Para iniciar o banco de dados:
```sh
docker compose up -d
```
> Para rodar as migrates do banco:
```sh
npx prisma migrate dev --name init
```
> Para iniciar o client do prisma:
```sh
npx prisma generate
```
> Para iniciar a aplicação, digite no terminal:
```sh
npm run dev
```
> Observação: para o projeto, garanta que o Node.js esteja instalado corretamente em sua máquina. Para instalar o Node.js acesse [Node.js](https://nodejs.org/en/download/prebuilt-installer)
## Layout da Aplicação :computer:
![Pasted image 20250613042651](https://github.com/user-attachments/assets/46327d8e-7a90-444a-8f58-0f8ba0759972)
![Pasted image 20250613042714](https://github.com/user-attachments/assets/48b7b254-68ae-4e73-b9fe-9adee60bc472)
![Pasted image 20250613043007](https://github.com/user-attachments/assets/d5a5aa8b-3aa2-4554-9f25-f10f1d8a46d8)
![Pasted image 20250613043027](https://github.com/user-attachments/assets/cad07208-ca01-43c3-9b9f-811633463128)
![Pasted image 20250613043045](https://github.com/user-attachments/assets/3e5b2171-7b71-41fe-b101-ca8c0d33853f)

## Linguagens, dependencias e libs utilizadas :books:

- [React](https://legacy.reactjs.org/docs/getting-started.html)
- [Next.js](https://nextjs.org/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Prisma](https://www.prisma.io/docs/orm)
- [Auth.js](https://authjs.dev/getting-started/authentication/oauth)
- [PostgresSql](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Rotas API

- GET /api/registro - Lista registros
- POST /api/registro - Insere registros
	- body:
```json
{
	"tipo": "",
	"nomeRegistro": "",
	"cvssECwss": Number,
	"sistema": "",
	"descricao": ""
}
```
- GET /api/auth/session - Pega sessão
- POST /api/auth/signin/github - Realiza login / logout
## Desenvolvedor :octocat:

[<img src="https://github.com/JuanHenrique04.png" width=200><br><p>Juan Henrique</p>](https://www.linkedin.com/in/juan-henrique-04b072235/)

[^1]: Listar registros
