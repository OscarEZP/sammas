import { Teams } from '../../entities/team.entity';
import { Connection } from 'typeorm';

export const teamsProviders = [
  {
    provide: 'TEAMS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Teams),
    inject: ['DATABASE_CONNECTION'],
  },
];
