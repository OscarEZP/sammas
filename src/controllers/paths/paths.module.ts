import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database/database.module';
import { PathsRepository } from '../../services/paths.repository';
import { PathsController } from './paths.controller';
import { pathsProviders } from './paths.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PathsController],
  providers: [...pathsProviders, PathsRepository],
})
export class PathsModule {}
