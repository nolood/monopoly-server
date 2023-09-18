import { Controller, Get } from '@nestjs/common';
import { DefaultGamesService } from './default-games.service';

@Controller('default-games')
export class DefaultGamesController {
  constructor(private defaultGamesService: DefaultGamesService) {}

  @Get()
  getAll() {
    return this.defaultGamesService.getAllDefaultGames();
  }
}
