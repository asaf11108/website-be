import { Gender } from './person.entity';
import { IsEmail, IsEnum, IsISO8601, IsString } from 'class-validator';

export class CreatePersonDto {
    @IsString()
    readonly firstName: string;
  
    @IsString()
    readonly lastName: string;
  
    @IsEmail()
    readonly email: string;
  
    @IsEnum(Gender)
    readonly gender: Gender;
  
    @IsISO8601()
    readonly birth_date: string;
}