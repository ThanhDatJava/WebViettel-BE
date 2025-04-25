import { Injectable } from '@nestjs/common';
import { CreateTiviDto } from './dto/create-tivi.dto';
import { UpdateTiviDto } from './dto/update-tivi.dto';

@Injectable()
export class TiviService {
  create(createTiviDto: CreateTiviDto) {
    return 'This action adds a new tivi';
  }

  findAll() {
    return `This action returns all tivi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tivi`;
  }

  update(id: number, updateTiviDto: UpdateTiviDto) {
    return `This action updates a #${id} tivi`;
  }

  remove(id: number) {
    return `This action removes a #${id} tivi`;
  }
}
