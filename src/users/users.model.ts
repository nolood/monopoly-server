import { Column, Table, Model, ForeignKey } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { DefaultGame } from '../default-games/default-games.model';

interface UserCreationAttributes {
  email: string;
  username: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttributes> {
  @Column({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  email: string;
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  username: string;
  @Column({ type: DataTypes.STRING })
  password: string;

  @ForeignKey(() => DefaultGame)
  defaultGame: DefaultGame;
}
