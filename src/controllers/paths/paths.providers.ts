import { Connection } from 'typeorm';
import { Paths } from 'src/entities/paths.entity';

export const pathsProviders = [
  {
    provide: 'PATHS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Paths),
    inject: ['DATABASE_CONNECTION'],
  },
];
