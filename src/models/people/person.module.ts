import { Module } from '@nestjs/common';
import { personProviders } from "../../providers/models/person.provider";

@Module({
  imports: [],
  providers: [
    ...personProviders
  ],
})
export class PersonModule {}