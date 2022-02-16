import { Person } from "src/models/people/person.entity";
import {MigrationInterface, QueryRunner} from "typeorm";

export class PersonDefaultCar1641732916174 implements MigrationInterface {
    PERSON_TABLE = 'person';
    CAR_TABLE = 'car';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const people = await queryRunner.manager.find<Person>(this.PERSON_TABLE);
        const cars = await queryRunner.manager.find<Person>(this.CAR_TABLE);
        people.forEach(person => {
            queryRunner.manager.update(this.PERSON_TABLE, person.id, { car: cars[0] });
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
