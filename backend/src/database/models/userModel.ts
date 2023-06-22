import { Model, DataTypes } from "sequelize";
import connection from "./index";

class User extends Model {
  declare id: number;
  declare name: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { 
  sequelize: connection,
  tableName: 'users',
  timestamps: false,
});

export default User;

// module.exports = (sequelize, DataTypes) => sequelize.define('User', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   tableName: 'users',
//   timestamps: false,
// });
