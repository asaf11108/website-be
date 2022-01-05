import { Gender } from './person.entity';
import { IsEmail, IsEnum, IsISO8601, IsNumberString, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class PersonDto {
    @IsString()
    readonly firstName: string;
  
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