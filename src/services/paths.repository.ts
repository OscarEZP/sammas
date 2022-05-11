import { Injectable, Inject } from '@nestjs/common';
import { Paths } from 'src/entities/paths.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PathsRepository {
  constructor(
    @Inject('PATHS_REPOSITORY')
    private pathsRepository: Repository<Paths>,
  ) {}

  async create(data: any) {
    const createTeamsObject = this.pathsRepository.create(data);
    return await this.pathsRepository.save(createTeamsObject);
  }

  async getAll() {
    return await this.pathsRepository.find();
  }

  async getById(id: number) {
    return await this.pathsRepository.findOne(id);
  }
}
