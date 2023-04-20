<div align="center">
  <img src="./readme/logo.svg" />
</div>
<h3 align="center">Nibiru Chat API</h3>
<p align="center">
  <a href="https://nibiru-chat-api.onrender.com/">View API Demo</a>
  ·
  <a href="https://github.com/andry-pebrianto/nibiruchat-api/issues">Report Bug</a>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a Restful API repository for Nibiru Chat. This Restful API is built using ExpressJS and PostgreSQL.

### Technology Used

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Google APIs](https://github.com/googleapis/google-api-nodejs-client)
- [Nodemailer](https://nodemailer.com/about/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Getting Started

### Installation

- Clone this project with `git clone https://github.com/andry-pebrianto/nibiruchat-api.git`
- Install package required with `npm install`
- Setting .env

```bash
APP_NAME=
NODE_ENV=
PORT=
API_URL=

# database
PGUSER=
PGHOST=
PGPASSWORD=
PGDATABASE=
PGPORT=

# jwt
JWT_SECRET=

# google
EMAIL_FROM=
EMAIL_USER=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
REDIRECT_URI=
GMAIL_REFRESH_TOKEN=
DRIVE_REFRESH_TOKEN=
```

### Executing program

- Run program with `npm run dev` for development and `npm run start` for production

## Endpoint List

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/13299472-95b35893-0243-4e38-aa85-c16051da1c37?action=collection%2Ffork&collection-url=entityId%3D13299472-95b35893-0243-4e38-aa85-c16051da1c37%26entityType%3Dcollection%26workspaceId%3Dfe5f6a4d-a8db-4a39-9852-e54fd7754e4c)

<!-- RELATED PROJECT -->

## Related Project

- [Nibiru Chat Client](https://github.com/andry-pebrianto/nibiruchat-client)
- [Nibiru Chat Demo](https://nibiruchat.netlify.app/)

## Authors

Contributors names and contact info:

1. Andry Pebrianto

- [Linkedin](https://www.linkedin.com/in/andry-pebrianto)

## License

This project is licensed under the MIT License - see the LICENSE file for details
