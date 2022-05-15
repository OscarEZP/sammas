import { Injectable, Inject } from '@nestjs/common';
import { Teams } from 'src/entities/team.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @Inject('TEAMS_REPOSITORY')
    private teamsRepository: Repository<Teams>,
  ) {}

  async create(data) {
    const createTeamsObject = this.teamsRepository.create(data);
    return await this.teamsRepository.save(createTeamsObject);
  }

  async getAll() {
    return await this.teamsRepository.find({
      relations: ['group', 'paths', 'notices'],
    });
  }

  async getById(id: string) {
    return await this.teamsRepository.findOne(id, {
      relations: ['group', 'paths', 'notices'],
    });
  }
}
