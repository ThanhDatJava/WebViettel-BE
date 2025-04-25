import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiviService } from './tivi.service';
import { CreateTiviDto } from './dto/create-tivi.dto';
import { UpdateTiviDto } from './dto/update-tivi.dto';

@Controller('tivi')
export class TiviController {
  constructor(private readonly tiviService: TiviService) {}

  @Post()
  create(@Body() createTiviDto: CreateTiviDto) {
    return this.tiviService.create(createTiviDto);
  }

  @Get()
  findAll() {
    return this.tiviService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiviService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiviDto: UpdateTiviDto) {
    return this.tiviService.update(+id, updateTiviDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiviService.remove(+id);
  }
}
