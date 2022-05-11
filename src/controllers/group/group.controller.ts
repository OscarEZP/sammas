import { Body, Controller, Post, Res } from '@nestjs/common';
import { GroupsRepository } from 'src/services/group.repository';
import { Response } from 'express';

@Controller('group')
export class GroupController {
  constructor(private readonly groupsRepository: GroupsRepository) {}

  @Post()
  async create(@Body() body: any, @Res() res: Response) {
    try {
      const response = await this.groupsRepository.create(body);
      return res.status(200).send({ message: response });
    } catch (error) {
      return res.status(error.status).send({ message: error.message });
    }
  }
}
