import { Groups } from 'src/entities/groups.entity';
import { Connection } from 'typeorm';

export const noticesProviders = [
  {
    provide: 'NOTICES_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Groups),
    inject: ['DATABASE_CONNECTION'],
  },
];
