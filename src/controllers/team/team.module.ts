import { Module } from '@nestjs/common';
import { TeamService } from '../../services/team.repository';
import { DatabaseModule } from '../../config/database/database.module';
import { TeamController } from './team.controller';
import { teamsProviders } from './team.providers';
import { UploadFileService } from '../../services/upload-files';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamController],
  providers: [...teamsProviders, TeamService, UploadFileService],
})
export class TeamModule {}
