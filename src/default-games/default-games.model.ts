import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';
import { DefaultGamesUsers } from './default-games-users.model';

interface DefaultGameCreationAttributes {
  name: string;
}

@Table({ tableName: 'default_games' })
export class DefaultGame extends Model<DefaultGame, DefaultGameCreationAttributes> {
  @Column({ type: DataType.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true })
  id: string;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;
  @BelongsToMany(() => User, () => DefaultGamesUsers)
  users: User[];
}
