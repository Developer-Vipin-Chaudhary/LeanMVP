import { Sequelize } from "sequelize";

require("dotenv").config();

let { DATABASEURL } = process.env;
let sequelize: Sequelize | undefined;

if (DATABASEURL) {
  sequelize = new Sequelize(DATABASEURL, {
    dialect: "postgres",
  });
}
export default sequelize;
