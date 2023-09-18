import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';
import { DefaultGame } from './default-games.model';

@Table({ tableName: 'default_games_users', createdAt: false, updatedAt: false })
export class DefaultGamesUsers extends Model<DefaultGamesUsers> {
  @Column({ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true })
  id: string;
  @ForeignKey(() => User)
  @Column({ type: DataTypes.UUID })
  userId: string;
  @ForeignKey(() => DefaultGame)
  @Column({ type: DataTypes.UUID })
  defaultGameId: string;
}
