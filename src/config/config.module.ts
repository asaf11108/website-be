import * as Joi from 'joi';
import { Module, Global } from '@nestjs/common';
import { AppConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validationSchema: Joi.object({
        PRODUCTION: Joi.string().required(),
        AUTH0_ISSUER_URL: Joi.string().required(),
        AUTH0_AUDIENCE: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}