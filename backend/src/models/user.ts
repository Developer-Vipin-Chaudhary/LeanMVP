import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
}

if (sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      tableName: "users",
      sequelize,
    }
  );
}
export default User;
