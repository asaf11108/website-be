import { Gender } from './person.entity';
import { IsEmail, IsEnum, IsISO8601, IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

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
    @IsNumberString()
    id: number;
}

export class PersonQuery extends PartialType(PersonDto) {}