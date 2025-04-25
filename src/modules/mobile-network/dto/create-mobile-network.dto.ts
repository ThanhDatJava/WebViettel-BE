import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMobileNetworkDto {
  @IsNotEmpty({ message: 'Gói cước không được để trống' })
  goicuoc: string;

  @IsNotEmpty({ message: 'Giá không được để trống' })
  gia: string;

  @IsNotEmpty({ message: 'Tính năng không được để trống' })
  tinhnang: string;

  @IsOptional()
  image: string;
}
