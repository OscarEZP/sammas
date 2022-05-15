import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { TeamModule } from './controllers/team/team.module';
import { GroupModule } from './controllers/group/group.module';
import { PathsModule } from './controllers/paths/paths.module';
import { NoticesModule } from './controllers/notices/notices.module';

@Module({
  imports: [DatabaseModule, TeamModule, GroupModule, PathsModule, NoticesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
