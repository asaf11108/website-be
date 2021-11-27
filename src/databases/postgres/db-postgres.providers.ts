import { AppConfigService } from '../../config/config.service';
import { Provider } from '@nestjs/common';
import { createConnection } from 'typeorm';

export const dbPostgresProvider: Provider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (appConfigService: AppConfigService) => await createConnection({
    type: 'postgres',
    host: appConfigService.databaseHost,
    port: appConfigService.databasePort,
    username: appConfigService.databaseUser,
    password: appConfigService.databasePassword,
    database: appConfigService.databaseName,
    entities: [
      __dirname + '/' + '../../models/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    logging: true,
    ssl: true,
    extra: {
      ssl: {
        "rejectUnauthorized": false
      }
    }
  }),
  inject: [AppConfigService],
}
