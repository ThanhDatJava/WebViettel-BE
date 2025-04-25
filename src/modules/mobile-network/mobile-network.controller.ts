import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MobileNetworkService } from './mobile-network.service';
import { CreateMobileNetworkDto } from './dto/create-mobile-network.dto';
import { UpdateMobileNetworkDto } from './dto/update-mobile-network.dto';
import { Public } from '@/decorator/customize';

@Controller('mobile-network')
export class MobileNetworkController {
  constructor(private readonly mobileNetworkService: MobileNetworkService) {}

  @Get('get-all')
  @Public()
  findAll() {
    return this.mobileNetworkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobileNetworkService.findOne(+id);
  }

  @Post('create')
  @Public()
  create(@Body() createMobileNetworkDto: CreateMobileNetworkDto) {
    return this.mobileNetworkService.create(createMobileNetworkDto);
  }

  @Patch('edit')
  @Public()
  update(@Body() updateMobileNetworkDto: UpdateMobileNetworkDto) {
    return this.mobileNetworkService.update(updateMobileNetworkDto);
  }

  @Delete('delete')
  @Public()
  remove(@Body() updateMobileNetworkDto: UpdateMobileNetworkDto) {
    return this.mobileNetworkService.remove(updateMobileNetworkDto);
  }
}
