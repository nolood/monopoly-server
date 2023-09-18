import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DefaultGame } from './default-games.model';

@Injectable()
export class DefaultGamesService {
  constructor(@InjectModel(DefaultGame) private defaultGamesRepository: typeof DefaultGame) {}

  async getAllDefaultGames() {
    const games = await this.defaultGamesRepository.findAll();
    return games;
  }
}
