import { Module } from '@nestjs/common';
import { AppRoutingModule } from './app-routing.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [AppRoutingModule, AppConfigModule],
})
export class AppModule {}
