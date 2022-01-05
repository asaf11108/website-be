import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'car_make', length: 50 })
  carMake: string;

  @Column({ name: 'car_model_year' })
  carModelYear: number;
}