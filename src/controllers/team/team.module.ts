import { Module } from '@nestjs/common';
import { TeamService } from '../../services/team.repository';
import { DatabaseModule } from '../../config/database/database.module';
import { TeamController } from './team.controller';
import { teamsProviders } from './team.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamController],
  providers: [...teamsProviders, TeamService],
})
export class TeamModule {}
