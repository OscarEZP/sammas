import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { TeamService } from '../../services/team.repository';
import { Response } from 'express';

export interface TeamRequest {
  name: string;
  homeName: string;
  awayName: string;
  start: Date;
  type: string;
  sport: string;
  state: string;
  liveBetOffers: boolean;
  openForLiveBetting: boolean;
}

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async create(@Body() body: TeamRequest, @Res() res: Response) {
    try {
      const response = await this.teamService.create(body);
      return res.status(200).send({ message: response });
    } catch (error) {
      return res.status(error.status).send({ message: error.message });
    }
  }

  @Get()
  async get(@Res() res: Response) {
    try {
      const response = await this.teamService.getAll();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(error.status).send({ message: error.message });
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    try {
      const response = await this.teamService.getById(id);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(error.status).send({ message: error.message });
    }
  }
}
