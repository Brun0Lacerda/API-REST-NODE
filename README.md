# Bankslips Management

## 🚀 Introduction

This project is an API for generating and managing bankslips.

## ⚙️ Features

The project offers the following endpoints:

- **Create Bankslip**: Creates a new bankslip in the system.
- **List Bankslips**: Returns a list of all registered bankslips.
- **View Bankslip Details**: Returns detailed information about a specific bankslip, including any applicable penalty calculation.
- **Pay Bankslip**: Changes the status of a bankslip to paid.
- **Cancel Bankslip**: Cancels an existing bankslip.

## 🛠️ Technologies Used

- **Node.js**: Used with the Express.js framework to build the API.
- **MySQL**: Relational database used to store the bankslips.
- **Knex**: Used to create the data schema and migrations.
- **Swagger**: Used to document the API endpoints.
- **JWT**: Used for authentication.
- **Docker**: Used to facilitate project distribution and execution.
- **GitHub Actions**: Used to build a CI/CD pipeline with tests and eslint.

## 🔧 Installation and Execution

1. Clone the repository: `git clone https://github.com/Brun0Lacerda/challenge-node-js.git`
2. Install dependencies: `npm install`
3. Configure environment variables in the `.env` file
4. Make sure you have Node.js and Docker installed on your machine
5. Run the project: `npm start`
6. Run the command `docker compose up` to start the database
7. Run the command `npx knex migrate:latest` to create tables in the database
8. Enjoy

## 📝 Endpoint Documentation

Detailed documentation of the API endpoints can be found here: http://localhost:8080/docs/.

## 🚀 Contribution

Contributions are welcome! Feel free to open issues and pull requests.
