import { PartialType } from '@nestjs/mapped-types';
import { CreateWifiDto } from './create-wifi.dto';

import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateWifiDto extends PartialType(CreateWifiDto) {
  @IsMongoId({ message: '_id không hợp lệ' })
  @IsNotEmpty({ message: '_id không được để trống' })
  _id: string;

  @IsOptional()
  goicuoc: string;

  @IsOptional()
  tinhnang: string;

  @IsOptional()
  gia: string;

  @IsOptional()
  giaTVGT: string;

  @IsOptional()
  giaTVDC: string;

  @IsOptional()
  giaCamera: string;

  @IsOptional()
  image: string;
}
