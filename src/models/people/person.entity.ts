import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', length: 50 })
  firstName: string;

  @Column({ name: 'last_name', length: 50 })
  lastName: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 50 })
  gender: string;

}