import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './individual/user.module';
import { databaseProvider } from './database.provider';

@Module({
  imports: [
    databaseProvider,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {}
}
