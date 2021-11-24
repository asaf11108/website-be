import { ReportsService } from './reports.service';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { GetReportsController } from './get-reports.controller';

@Module({
  controllers: [GetReportsController],
  imports: [AuthModule],
  providers: [ReportsService],
  exports: [],
})
export class ReportsModule {}
