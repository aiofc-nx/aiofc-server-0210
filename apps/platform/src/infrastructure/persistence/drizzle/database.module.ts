import { ConfigService } from '@aiofc/config';
import { Global, Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

@Global()
@Module({
  providers: [
    {
      provide: 'DATABASE_DRIZZLE_PG',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.database;

        const databasePool = new Pool({
          host: config.host,
          user: config.user,
          password: config.password,
          database: config.name,
          port: config.port,
        });

        return drizzle(databasePool);
      },
    },
  ],
  exports: ['DATABASE_DRIZZLE_PG'],
})
export class DatabaseModule {}
