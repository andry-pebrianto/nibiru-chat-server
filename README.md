<div align="center">
  <img src="./readme/logo.svg" />
</div>
<h3 align="center">Nibiru Chat API</h3>
<p align="center">
  <a href="https://github.com/andry-pebrianto/nibiru-chat-server/issues">Report Bug</a>
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

- Clone this project with `git clone https://github.com/andry-pebrianto/nibiru-chat-server.git`
- Install package required with `npm install`
- Setting .env

```bash
APP_NAME=
NODE_ENV=
PORT=
API_URL=
CLIENT_URL=
PGUSER=
PGHOST=
PGPASSWORD=
PGDATABASE=
PGPORT=
PGSSLMODE=
JWT_SECRET=
EMAIL_USER=
EMAIL_FROM=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=
RESEND_API_KEY=
VIRTUAL_HOST=
LETSENCRYPT_HOST=
LETSENCRYPT_EMAIL=
MAX_OLD_SPACE_SIZE=
```

- Migrate database using `npm run migrate up`

### Executing program

- Run program with `npm run dev` for development and `npm run start` for production

<!-- RELATED PROJECT -->

## Related Project

- [Nibiru Chat Client](https://github.com/andry-pebrianto/nibiruchat-client)
- [Nibiru Chat Demo](https://nibiruchat.andrypebrianto.com)

## Authors

Contributors names and contact info:

1. Andry Pebrianto

- [Linkedin](https://www.linkedin.com/in/andry-pebrianto)

## License

This project is licensed under the MIT License - see the LICENSE file for details
