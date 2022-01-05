import { IsNumber, IsString } from 'class-validator';

export class CarDto {
    @IsString()
    readonly carMake: string;
  
    @IsNumber()
    readonly carModelYear: string;
}
