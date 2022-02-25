import { Gender } from './person.entity';
import { IsEmail, IsEnum, IsISO8601, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PersonDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;
  
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
  
    @ApiProperty()
    @IsEmail()
    readonly email: string;
  
    @ApiProperty({ enum: Gender })
    @IsEnum(Gender)
    readonly gender: Gender;
  
    @ApiProperty()
    @IsISO8601()
    readonly birthDate: string;
}

export class PersonParams {
    @ApiProperty()
    @Type(() => Number)
    @IsNumber()
    id: number;
}

export class PersonQuery extends PartialType(PersonDto) {}