import { PartialType } from '@nestjs/mapped-types';
import { CreateMobileNetworkDto } from './create-mobile-network.dto';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateMobileNetworkDto extends PartialType(
  CreateMobileNetworkDto,
) {
  @IsMongoId({ message: '_id không hợp lệ' })
  @IsNotEmpty({ message: '_id không được để trống' })
  _id: string;

  @IsOptional()
  goicuoc: string;

  @IsOptional()
  gia: string;

  @IsOptional()
  tinhnang: string;

  @IsOptional()
  image: string;
}
