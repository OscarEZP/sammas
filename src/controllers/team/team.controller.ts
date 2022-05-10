import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { TeamRepository } from '../../repositories/team.repository';

export interface TeamRequest {
  name: string;
  homeName: string;
  awayName: string;
  start: string;
  type: string;
  sport: string;
  state: string;
  liveBetOffers: boolean;
  openForLiveBetting: boolean;
}

@Controller('team')
export class TeamController {
  constructor() {}
  @Post()
  async create(@Body() body: TeamRequest, @Res() res: Response) {
    try {
      // const response = await this.teamRepository.create(body);
      // return res.status(200).send({ message: 'Created', response });
    } catch (error) {
      res.status(error.status).send({ message: error.message });
    }
  }

  @Get()
  async get(@Res() res: Response) {
    try {
    } catch (error) {
      res.status(error.status).send({ message: error.message });
    }
  }
}
