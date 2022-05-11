import { Body, Controller, Post, Res } from '@nestjs/common';
import { PathsRepository } from '../../services/paths.repository';
import { Response } from 'express';

@Controller('paths')
export class PathsController {
  constructor(private readonly pathsRepository: PathsRepository) {}

  @Post()
  async create(@Body() body: any, @Res() res: Response) {
    try {
      const response = await this.pathsRepository.create(body);
      return res.status(200).send({ message: response });
    } catch (error) {
      return res.status(error.status).send({ message: error.message });
    }
  }
}
