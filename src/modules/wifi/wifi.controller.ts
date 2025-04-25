import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WifiService } from './wifi.service';
import { CreateWifiDto } from './dto/create-wifi.dto';
import { UpdateWifiDto } from './dto/update-wifi.dto';
import { Public } from '@/decorator/customize';

@Controller('wifi')
export class WifiController {
  constructor(private readonly wifiService: WifiService) {}

  @Get()
  @Public()
  findAll() {
    return this.wifiService.findAll();
  }

  @Get('get')
  @Public()
  findOne(@Param('id') id: string) {
    return this.wifiService.findOne(+id);
  }

  @Post('create')
  @Public()
  create(@Body() createWifiDto: CreateWifiDto) {
    return this.wifiService.create(createWifiDto);
  }

  @Patch('edit')
  @Public()
  update(@Body() updateWifiDto: UpdateWifiDto) {
    return this.wifiService.update(updateWifiDto);
  }

  @Delete('delete')
  @Public()
  remove(@Body() updateWifiDto: UpdateWifiDto) {
    return this.wifiService.remove(updateWifiDto);
  }
}
