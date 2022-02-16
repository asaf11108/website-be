import { ConnectionOptions } from "typeorm";

export const generateORMConfig = (url: string): ConnectionOptions => ({
    type: 'postgres',
    url,
    entities: [
      __dirname + '/' + '../../models/**/*.entity{.ts,.js}',
    ],
    migrations: [__dirname + '/' + '../../migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: __dirname + '/' + '../../migrations'
    },
    logging: true,
    synchronize: false,
    ssl: true,
    extra: {
      ssl: {
        "rejectUnauthorized": false
      }
    }
  })
  
  const ORMConfig = generateORMConfig(process.env.DATABASE_URL);

  export default ORMConfig;
  