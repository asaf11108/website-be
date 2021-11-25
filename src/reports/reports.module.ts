import { ReportsService } from './reports.service';
import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { GetReportsController } from './get-reports.controller';
import { DatabaseModule } from '../providers/database.module';

@Module({
  controllers: [GetReportsController],
  imports: [AuthModule, DatabaseModule],
  providers: [ReportsService],
  exports: [],
})
export class ReportsModule {}
