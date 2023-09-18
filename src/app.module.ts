import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { DefaultGamesModule } from './default-games/default-games.module';
import { DefaultGamesUsers } from './default-games/default-games-users.model';
import { DefaultGame } from './default-games/default-games.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, DefaultGamesUsers, DefaultGame],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    DefaultGamesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
