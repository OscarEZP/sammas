import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';
import { GroupsRepository } from 'src/services/group.repository';
import { GroupController } from './group.controller';
import { groupsProviders } from './group.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GroupController],
  providers: [...groupsProviders, GroupsRepository],
})
export class GroupModule {}
