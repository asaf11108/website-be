import { ReportsService } from './reports.service';
import { Module } from '@nestjs/common';
import { GetReportsController } from './get-reports.controller';

@Module({
  controllers: [GetReportsController],
  providers: [ReportsService],
  exports: [],
})
export class ReportsModule {}
