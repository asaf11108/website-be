import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarService {

    constructor(@Inject('CAR_REPOSITORY')
    public carRepository: Repository<Car>) {
    }
}
