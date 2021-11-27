import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {

    constructor(@Inject('PERSON_REPOSITORY')
    private photoRepository: Repository<Person>) {
        // photoRepository.find().then(console.log)
    }
}
