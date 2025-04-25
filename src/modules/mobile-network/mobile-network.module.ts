import { Module } from '@nestjs/common';
import { MobileNetworkService } from './mobile-network.service';
import { MobileNetworkController } from './mobile-network.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MobileNetwork,
  MobileNetworkSchema,
} from './schemas/mobile-network.schemas';

@Module({})
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MobileNetwork.name, schema: MobileNetworkSchema },
    ]),
  ],
  controllers: [MobileNetworkController],
  providers: [MobileNetworkService],
  exports: [MobileNetworkService],
})
export class MobileNetworkModule {}
