import { AppConfigModule } from './../config/config.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), AppConfigModule],
  providers: [JwtStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
