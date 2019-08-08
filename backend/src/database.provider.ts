import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const connectionOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    __dirname + '/../**/*.entity.js',  // We use the compiled entity files here
  ],
  synchronize: true,
  logging: true,
};
export const databaseProvider = TypeOrmModule.forRoot(connectionOptions);
