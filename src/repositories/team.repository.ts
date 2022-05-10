import { Injectable, Inject } from '@nestjs/common';
import { TeamRequest } from 'src/controllers/team/team.controller';
import { Teams } from 'src/entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamRepository {
  constructor(
    @Inject('TEAMS_REPOSITORY')
    private teamsRepository: Repository<Teams>,
  ) {}

  async create(data: TeamRequest) {
    const createTeamsObject = this.teamsRepository.create(data);
    return await this.teamsRepository.save(createTeamsObject);
  }

  async getAll() {
    return await this.teamsRepository.find();
  }

  async getById(id: number) {
    return await this.teamsRepository.findOne(id);
  }
}
