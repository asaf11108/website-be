import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class PeopleService {

    constructor(@Inject('CAR_REPOSITORY')
    public personRepository: Repository<Car>) {
    }
}
