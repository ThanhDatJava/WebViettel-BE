import { Module } from '@nestjs/common';
import { WifiService } from './wifi.service';
import { WifiController } from './wifi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from '../users/users.service';
import { Wifi, WifiSchema } from './schemas/wifi.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Wifi.name, schema: WifiSchema }]),
  ],
  controllers: [WifiController],
  providers: [WifiService],
  exports: [WifiService],
})
export class WifiModule {}
