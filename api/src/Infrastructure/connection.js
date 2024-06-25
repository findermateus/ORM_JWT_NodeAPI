import { Sequelize } from 'sequelize';
import dotenv from "dotenv";

dotenv.config();

const DBNAME = process.env.DBNAME;
const DBHOST = process.env.DBHOST
const DBUSER = process.env.DBUSER;
const DBPASS = process.env.DBPASS;


console.log(DBPASS)

const sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    host: DBHOST,
    dialect: 'mysql'
});

await sequelize.authenticate();

export default sequelize;
