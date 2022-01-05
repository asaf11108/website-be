import { Car } from './car.entity';
import { Connection } from "typeorm";
import { Provider } from '@nestjs/common';

export const CarProvider: Provider = {
  provide: 'CAR_REPOSITORY',
  useFactory: (connection: Connection) => connection.getRepository(Car),
  inject: ['DATABASE_CONNECTION'],
};
