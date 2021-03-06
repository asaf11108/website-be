import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Car } from '../car/car.entity';

export enum Gender {
  Male = 'male',
  Female = 'female'
}

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', length: 50, nullable: false })
  firstName: string;

  @Column({ name: 'last_name', length: 50, nullable: false })
  lastName: string;

  @Column({ length: 50 })
  email: string;
  
  @ApiProperty({ enum: Gender, enumName: 'Gender' })
  @Column({ type: 'enum', enum: Gender, default: Gender.Male })
  gender: Gender;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: string;

  @ManyToOne(() => Car, { nullable: false })
  @JoinColumn([{ name: 'car_id', referencedColumnName: 'id' }])
  car: Car;
}