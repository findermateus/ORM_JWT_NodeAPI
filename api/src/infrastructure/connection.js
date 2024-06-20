import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
dotenv.config();
const DBNAME = process.env.DBNAME;
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;

const sequelize = new Sequelize(DBNAME, 'root', DBPASS, {
    host: '172.30.0.2',
    dialect: 'mysql'
});

await sequelize.authenticate();

export default sequelize;
