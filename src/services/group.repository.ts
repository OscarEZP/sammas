import { Injectable, Inject } from '@nestjs/common';
import { Groups } from 'src/entities/groups.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupsRepository {
  constructor(
    @Inject('GROUPS_REPOSITORY')
    private groupsRepository: Repository<Groups>,
  ) {}

  async create(data: any) {
    const createTeamsObject = this.groupsRepository.create(data);
    return await this.groupsRepository.save(createTeamsObject);
  }

  async getAll() {
    return await this.groupsRepository.find();
  }

  async getById(id: number) {
    return await this.groupsRepository.findOne(id);
  }
}
