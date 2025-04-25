import { Module } from '@nestjs/common';
import { TiviService } from './tivi.service';
import { TiviController } from './tivi.controller';

@Module({
  controllers: [TiviController],
  providers: [TiviService],
})
export class TiviModule {}
