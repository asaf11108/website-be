import { Gender } from './person.entity';
import { IsEmail, IsEnum, IsISO8601, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
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
  
    @IsEnum(Gender)
    readonly gender: Gender;
  
    @IsISO8601()
    readonly birthDate: string;
}

export class PersonParams {
    @Type(() => Number)
    @IsNumber()
    id: number;
}

export class PersonQuery extends PartialType(PersonDto) {}