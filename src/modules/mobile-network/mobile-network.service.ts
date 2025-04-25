import { Injectable } from '@nestjs/common';
import { CreateMobileNetworkDto } from './dto/create-mobile-network.dto';
import { UpdateMobileNetworkDto } from './dto/update-mobile-network.dto';
import { MobileNetwork } from './schemas/mobile-network.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MobileNetworkService {
  constructor(
    @InjectModel(MobileNetwork.name)
    private mobileNetworkModel: Model<MobileNetwork>,
  ) {}

  findOne(id: number) {
    return `This action returns a #${id} mobileNetwork`;
  }

  async findAll() {
    const mobileNetwork = await this.mobileNetworkModel.find();
    return mobileNetwork;
  }

  async create(createMobileNetworkDto: CreateMobileNetworkDto) {
    const { goicuoc, tinhnang, gia, image } = createMobileNetworkDto;

    const mobileNetwork = await this.mobileNetworkModel.create({
      goicuoc,
      tinhnang,
      gia,
      image,
    });
    return {
      _id: mobileNetwork._id,
    };
  }

  async update(updateMobileNetworkDto: UpdateMobileNetworkDto) {
    const _id = updateMobileNetworkDto._id;
    try {
      return this.mobileNetworkModel.updateOne(
        {
          _id: updateMobileNetworkDto._id,
        },
        {
          ...updateMobileNetworkDto,
        },
      );
    } catch (error) {
      return 'Error edit !';
    }
  }

  async remove(updateMobileNetworkDto: UpdateMobileNetworkDto) {
    const _id = updateMobileNetworkDto._id;

    try {
      await this.mobileNetworkModel.deleteOne({ _id });
      return { message: 'Document successfully deleted' };
    } catch (error) {
      return 'Error delete !';
    }
  }
}
