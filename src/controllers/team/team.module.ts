import { Module } from '@nestjs/common';
import { TeamRepository } from 'src/repositories/team.repository';
import { DatabaseModule } from '../../config/database/database.module';
import { TeamController } from './team.controller';
import { teamsProviders } from './team.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamController],
  providers: [...teamsProviders, TeamRepository],
})
export class TeamModule {}
