import { AppConfigService } from '../../config/config.service';
import { Provider } from '@nestjs/common';
import { createConnection } from 'typeorm';

export const dbPostgresProvider: Provider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (appConfigService: AppConfigService) => await createConnection({
    type: 'postgres',
    url: appConfigService.databaseURL,
    entities: [
      __dirname + '/' + '../../models/**/*.entity{.ts,.js}',
    ],
    migrations: [__dirname + '/' + '../../migration/*{.ts,.js}'],
    cli: {
      migrationsDir: __dirname + '/' + '../../migration'
    },
    logging: true,
    synchronize: true,
    ssl: true,
    extra: {
      ssl: {
        "rejectUnauthorized": false
      }
    }
  }),
  inject: [AppConfigService],
}