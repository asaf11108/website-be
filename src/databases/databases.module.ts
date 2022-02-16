import { CarProvider } from './../models/car/car.provider';
import { PersonProvider } from './../models/people/person.provider';
import { Global, Module, Provider } from '@nestjs/common';
import { dbPostgresProvider } from './postgres/db-postgres.provider';

const databaseProviders: Provider[] = [
    dbPostgresProvider
];

const modelsProviders: Provider[] = [
    PersonProvider,
    CarProvider
];

@Global()
@Module({
    providers: [...databaseProviders, ...modelsProviders],
    exports: [...databaseProviders, ...modelsProviders],
})
export class DatabasesModule { }