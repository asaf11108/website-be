import { Person } from '../models/people/person.entity';
import { endOfDay } from "date-fns";
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class peopleBirthDateRefactor1638174496580 implements MigrationInterface {
    PERSON_TABLE = 'person';
    BIRTH_DATE_COLUMN = 'birth_date';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(this.PERSON_TABLE, new TableColumn({ name: this.BIRTH_DATE_COLUMN, type: 'date' }));
        const people = await queryRunner.manager.find<Person>(this.PERSON_TABLE);
        people.forEach(person => {
            queryRunner.manager.update(this.PERSON_TABLE, person.id, { [this.BIRTH_DATE_COLUMN]: this.randomDate(new Date(1970, 0, 1), new Date()) });
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn(this.PERSON_TABLE, this.BIRTH_DATE_COLUMN);
    }


    randomDate(start: Date, end: Date) {
        return endOfDay(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
    }
}
