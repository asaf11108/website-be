import { personProviders } from './models/person.provider';
import { Module, Provider } from '@nestjs/common';
import { AppConfigModule } from '../config/config.module';
import { dbPostgresProvider } from './database/postgres/db-postgres.providers';

const databaseProviders: Provider[] = [
    dbPostgresProvider
];

const modelProviders: Provider[] = [
    ...personProviders
];

@Module({
    imports: [
        AppConfigModule,
    ],
    providers: [...databaseProviders, ...modelProviders],
    exports: [...databaseProviders, ...modelProviders],
})
export class DatabaseModule { }