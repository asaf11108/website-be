import {MigrationInterface, QueryRunner} from "typeorm";

export class insertCarData1641409206887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.manager.query(`
            insert into car (id, car_make, car_model_year) values (1, 'Dodge', 2006);
            insert into car (id, car_make, car_model_year) values (2, 'Isuzu', 2008);
            insert into car (id, car_make, car_model_year) values (3, 'Pontiac', 2002);
            insert into car (id, car_make, car_model_year) values (4, 'Dodge', 2012);
            insert into car (id, car_make, car_model_year) values (5, 'Ford', 1999);
            insert into car (id, car_make, car_model_year) values (6, 'GMC', 2010);
            insert into car (id, car_make, car_model_year) values (7, 'Saab', 2001);
            insert into car (id, car_make, car_model_year) values (8, 'Mercedes-Benz', 2005);
            insert into car (id, car_make, car_model_year) values (9, 'Mitsubishi', 1993);
            insert into car (id, car_make, car_model_year) values (10, 'Chevrolet', 2012);
            insert into car (id, car_make, car_model_year) values (11, 'Dodge', 1996);
            insert into car (id, car_make, car_model_year) values (12, 'Mercedes-Benz', 2000);
            insert into car (id, car_make, car_model_year) values (13, 'Hyundai', 2000);
            insert into car (id, car_make, car_model_year) values (14, 'Chrysler', 2005);
            insert into car (id, car_make, car_model_year) values (15, 'Mitsubishi', 1991);
            insert into car (id, car_make, car_model_year) values (16, 'Volkswagen', 2005);
            insert into car (id, car_make, car_model_year) values (17, 'Mercury', 1996);
            insert into car (id, car_make, car_model_year) values (18, 'Bentley', 2007);
            insert into car (id, car_make, car_model_year) values (19, 'Mercedes-Benz', 1993);
            insert into car (id, car_make, car_model_year) values (20, 'Aston Martin', 2007);
            insert into car (id, car_make, car_model_year) values (21, 'Mercedes-Benz', 2011);
            insert into car (id, car_make, car_model_year) values (22, 'Honda', 1999);
            insert into car (id, car_make, car_model_year) values (23, 'Kia', 1997);
            insert into car (id, car_make, car_model_year) values (24, 'Kia', 2006);
            insert into car (id, car_make, car_model_year) values (25, 'Mitsubishi', 2008);
            insert into car (id, car_make, car_model_year) values (26, 'Mazda', 2003);
            insert into car (id, car_make, car_model_year) values (27, 'Chevrolet', 1999);
            insert into car (id, car_make, car_model_year) values (28, 'Volkswagen', 1986);
            insert into car (id, car_make, car_model_year) values (29, 'Volkswagen', 2006);
            insert into car (id, car_make, car_model_year) values (30, 'Volkswagen', 1995);
            insert into car (id, car_make, car_model_year) values (31, 'Toyota', 1993);
            insert into car (id, car_make, car_model_year) values (32, 'Mercedes-Benz', 2010);
            insert into car (id, car_make, car_model_year) values (33, 'Toyota', 1999);
            insert into car (id, car_make, car_model_year) values (34, 'Maserati', 2006);
            insert into car (id, car_make, car_model_year) values (35, 'Toyota', 2000);
            insert into car (id, car_make, car_model_year) values (36, 'Chevrolet', 1960);
            insert into car (id, car_make, car_model_year) values (37, 'Volkswagen', 1988);
            insert into car (id, car_make, car_model_year) values (38, 'Honda', 1995);
            insert into car (id, car_make, car_model_year) values (39, 'Toyota', 1997);
            insert into car (id, car_make, car_model_year) values (40, 'Hummer', 2006);
            insert into car (id, car_make, car_model_year) values (41, 'Oldsmobile', 1996);
            insert into car (id, car_make, car_model_year) values (42, 'Ford', 1988);
            insert into car (id, car_make, car_model_year) values (43, 'Dodge', 2010);
            insert into car (id, car_make, car_model_year) values (44, 'Mercedes-Benz', 2004);
            insert into car (id, car_make, car_model_year) values (45, 'Saab', 2006);
            insert into car (id, car_make, car_model_year) values (46, 'Chrysler', 2007);
            insert into car (id, car_make, car_model_year) values (47, 'Plymouth', 1999);
            insert into car (id, car_make, car_model_year) values (48, 'Dodge', 1997);
            insert into car (id, car_make, car_model_year) values (49, 'Toyota', 1993);
            insert into car (id, car_make, car_model_year) values (50, 'Mazda', 2001);
            insert into car (id, car_make, car_model_year) values (51, 'Nissan', 2006);
            insert into car (id, car_make, car_model_year) values (52, 'Ford', 2001);
            insert into car (id, car_make, car_model_year) values (53, 'Chrysler', 1999);
            insert into car (id, car_make, car_model_year) values (54, 'Maserati', 1985);
            insert into car (id, car_make, car_model_year) values (55, 'Porsche', 1989);
            insert into car (id, car_make, car_model_year) values (56, 'Toyota', 1996);
            insert into car (id, car_make, car_model_year) values (57, 'Mercedes-Benz', 2003);
            insert into car (id, car_make, car_model_year) values (58, 'Saab', 1999);
            insert into car (id, car_make, car_model_year) values (59, 'Volkswagen', 2005);
            insert into car (id, car_make, car_model_year) values (60, 'Nissan', 2007);
            insert into car (id, car_make, car_model_year) values (61, 'Lexus', 2009);
            insert into car (id, car_make, car_model_year) values (62, 'Scion', 2010);
            insert into car (id, car_make, car_model_year) values (63, 'Pontiac', 1997);
            insert into car (id, car_make, car_model_year) values (64, 'BMW', 2002);
            insert into car (id, car_make, car_model_year) values (65, 'Pontiac', 1985);
            insert into car (id, car_make, car_model_year) values (66, 'Oldsmobile', 1999);
            insert into car (id, car_make, car_model_year) values (67, 'Mercedes-Benz', 2006);
            insert into car (id, car_make, car_model_year) values (68, 'Nissan', 2011);
            insert into car (id, car_make, car_model_year) values (69, 'Lexus', 2003);
            insert into car (id, car_make, car_model_year) values (70, 'Mitsubishi', 2006);
            insert into car (id, car_make, car_model_year) values (71, 'Lincoln', 2002);
            insert into car (id, car_make, car_model_year) values (72, 'Volkswagen', 2001);
            insert into car (id, car_make, car_model_year) values (73, 'Chevrolet', 1999);
            insert into car (id, car_make, car_model_year) values (74, 'Dodge', 1995);
            insert into car (id, car_make, car_model_year) values (75, 'Audi', 2012);
            insert into car (id, car_make, car_model_year) values (76, 'Mercedes-Benz', 2006);
            insert into car (id, car_make, car_model_year) values (77, 'Chevrolet', 2007);
            insert into car (id, car_make, car_model_year) values (78, 'Lincoln', 2009);
            insert into car (id, car_make, car_model_year) values (79, 'Nissan', 2012);
            insert into car (id, car_make, car_model_year) values (80, 'Volkswagen', 2003);
            insert into car (id, car_make, car_model_year) values (81, 'Ford', 2011);
            insert into car (id, car_make, car_model_year) values (82, 'Ford', 1999);
            insert into car (id, car_make, car_model_year) values (83, 'GMC', 1998);
            insert into car (id, car_make, car_model_year) values (84, 'Geo', 1993);
            insert into car (id, car_make, car_model_year) values (85, 'BMW', 2003);
            insert into car (id, car_make, car_model_year) values (86, 'Lexus', 1999);
            insert into car (id, car_make, car_model_year) values (87, 'Jeep', 2006);
            insert into car (id, car_make, car_model_year) values (88, 'Buick', 2004);
            insert into car (id, car_make, car_model_year) values (89, 'Land Rover', 2008);
            insert into car (id, car_make, car_model_year) values (90, 'Buick', 1992);
            insert into car (id, car_make, car_model_year) values (91, 'Chevrolet', 2009);
            insert into car (id, car_make, car_model_year) values (92, 'Land Rover', 1996);
            insert into car (id, car_make, car_model_year) values (93, 'Chrysler', 2002);
            insert into car (id, car_make, car_model_year) values (94, 'Mazda', 2000);
            insert into car (id, car_make, car_model_year) values (95, 'Chrysler', 2000);
            insert into car (id, car_make, car_model_year) values (96, 'Geo', 1995);
            insert into car (id, car_make, car_model_year) values (97, 'BMW', 2006);
            insert into car (id, car_make, car_model_year) values (98, 'Volvo', 1996);
            insert into car (id, car_make, car_model_year) values (99, 'Lexus', 2006);
            insert into car (id, car_make, car_model_year) values (100, 'Geo', 1996);`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
