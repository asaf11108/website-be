import { Gender } from './person.entity';
import { IsEmail, IsEnum, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PersonDto {
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;
  
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
  
    @IsEmail()
    readonly email: string;
  
    @ApiProperty({ enum: Gender, enumName: 'Gender' })
    @IsEnum(Gender)
    readonly gender: Gender;
  
    @IsISO8601()
    readonly birthDate: string;

    @IsOptional()
    @IsNumber()
    readonly carId?: number
}

export class PersonParams {
    @Type(() => Number)
    @IsNumber()
    id: number;
}

export class PersonQuery extends PartialType(PersonDto) {}