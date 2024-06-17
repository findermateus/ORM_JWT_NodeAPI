import mysql2 from "mysql2/promise";

const connection = await mysql2.createConnection({
    host: '172.25.0.2',
    user: 'root',
    password: '123',
    database: 'concessionaria'
});

console.log("Conectado ao MYSQL");

export default connection;
