import { PersonProvider } from './../models/people/person.provider';
import { Global, Module, Provider } from '@nestjs/common';
import { dbPostgresProvider } from './postgres/db-postgres.providers';

const databaseProviders: Provider[] = [
    dbPostgresProvider
];

const modelsProviders: Provider[] = [
    PersonProvider
];

@Global()
@Module({
    providers: [...databaseProviders, ...modelsProviders],
    exports: [...databaseProviders, ...modelsProviders],
})
export class DatabasesModule { }