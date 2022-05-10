import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { TeamModule } from './controllers/team/team.module';
import { GroupController } from './controllers/group/group.controller';
import { GroupModule } from './controllers/group/group.module';
import { PathsModule } from './controllers/paths/paths.module';

@Module({
  imports: [DatabaseModule, TeamModule, GroupModule, PathsModule],
  controllers: [AppController, GroupController],
  providers: [AppService],
})
export class AppModule {}
