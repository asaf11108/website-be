import { AppConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { DatabasesModule } from './databases/databases.module';
import { Module } from '@nestjs/common';
import { AppRoutingModule } from './app-routing.module';

@Module({
  imports: [AppRoutingModule, AppConfigModule, DatabasesModule, AuthModule],
})
export class AppModule {}
