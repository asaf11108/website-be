import { Person } from '../../models/people/person.entity';
import { Connection } from "typeorm";
import { Provider } from '@nestjs/common';

export const personProviders: Provider[] = [
    {
        provide: 'PERSON_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Person),
        inject: ['DATABASE_CONNECTION'],
    },
];