import { Car } from './car.entity';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CarService } from './car.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('cars')
@Controller()
export class CarController {

    constructor(private carService: CarService) { }

    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Get()
    async find(): Promise<Car[]> {
        return this.carService.carRepository.find();
    }
}
