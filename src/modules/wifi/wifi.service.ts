import { Injectable } from '@nestjs/common';
import { CreateWifiDto } from './dto/create-wifi.dto';
import { UpdateWifiDto } from './dto/update-wifi.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Wifi } from './schemas/wifi.schemas';
import { Model } from 'mongoose';

@Injectable()
export class WifiService {
  constructor(
    @InjectModel(Wifi.name)
    private wifiModel: Model<Wifi>,
  ) {}

  findOne(id: number) {
    return `This action returns a #${id} wifi`;
  }

  async findAll() {
    const Wifi = await this.wifiModel.find();
    return Wifi;
  }

  async create(createWifiDto: CreateWifiDto) {
    const { goicuoc, tinhnang, gia, giaCamera, giaTVDC, giaTVGT, image } =
      createWifiDto;

    const wifi = await this.wifiModel.create({
      goicuoc,
      tinhnang,
      gia,
      giaCamera,
      giaTVDC,
      giaTVGT,
      image,
    });
    return {
      _id: wifi._id,
    };
  }

  async update(updateWifiDto: UpdateWifiDto) {
    const _id = updateWifiDto;
    try {
      return this.wifiModel.updateOne(
        {
          _id: updateWifiDto._id,
        },
        {
          ...updateWifiDto,
        },
      );
    } catch (error) {
      return 'Error edit !';
    }
  }

  async remove(updateWifiDto: UpdateWifiDto) {
    const _id = updateWifiDto;

    console.log('_id', _id);

    try {
      await this.wifiModel.deleteOne({ _id });
      return { message: 'Document successfully deleted' };
    } catch (error) {
      return 'Error delete !';
    }
  }
}
