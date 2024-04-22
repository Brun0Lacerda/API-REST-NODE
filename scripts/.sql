/* Criando o banco de dados */

CREATE DATABASE bankslips;

/* Acessando o banco de dados */

USE bankslips

/* Criando a tabela do banco de dados */

CREATE TABLE bankslips (
    id SERIAL NOT NULL PRIMARY KEY,
    due_date DATE NOT NULL,
    payment_date DATE,
    total_in_cents INT NOT NULL,
    customer VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL
);

/* Inserindo um novo boleto na tabela: */

INSERT INTO bankslips (due_date, payment_date, total_in_cents, customer, status)
VALUES ('2018-01-01', '2018-01-01', 100000, 'Trillian Company', 'PENDING');

/* Para listar todos os boletos: */

SELECT * FROM bankslips;

/* Para buscar um boleto específico: */

SELECT * FROM bankslips WHERE id = '1';

/* Para pagar um boleto específico: */

UPDATE bankslips SET status = 'PAID', payment_date = '2018-06-30' WHERE id = '1';

/* Para cancelar um boleto específco */

UPDATE bankslips SET status = 'CANCELED' WHERE id = '2';
