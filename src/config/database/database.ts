import { createConnection } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: process.env.TYPEORM_CLOUDSQL,
        port: 3306,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
        extra: { socketPath: process.env.TYPEORM_CLOUDSQL },
      }),
  },
];
