import { Module } from '@nestjs/common';
import { DefaultGamesService } from './default-games.service';
import { DefaultGamesController } from './default-games.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DefaultGame } from './default-games.model';
import { DefaultGamesUsers } from './default-games-users.model';

@Module({
  providers: [DefaultGamesService],
  controllers: [DefaultGamesController],
  imports: [SequelizeModule.forFeature([DefaultGame, DefaultGamesUsers])],
})
export class DefaultGamesModule {}
