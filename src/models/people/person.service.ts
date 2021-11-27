import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PeopleService {

    constructor(@Inject('PERSON_REPOSITORY')
    public personRepository: Repository<Person>) {
    }
}
