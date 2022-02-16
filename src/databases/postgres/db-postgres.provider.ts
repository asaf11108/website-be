import { AppConfigService } from '../../config/config.service';
import { Provider } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { generateORMConfig } from './orm.config';

export const dbPostgresProvider: Provider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (appConfigService: AppConfigService) => await createConnection(generateORMConfig(appConfigService.databaseURL)),
  inject: [AppConfigService],
}
