import { AppConfigService } from './../../../config/config.service';
import { AppConfigModule } from './../../../config/config.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: async (appConfigService: AppConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: appConfigService.databaseHost,
        port: appConfigService.databasePort,
        username: appConfigService.databaseUser,
        password: appConfigService.databasePassword,
        database: appConfigService.databaseName,
        entities: [
          // ... All MySQL based schemas/entities
        ],
      }),
      inject: [AppConfigModule],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}
