import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateWifiDto {
  @IsNotEmpty({ message: 'Gói cước không được để trống' })
  goicuoc: string;

  @IsNotEmpty({ message: 'Giá không được để trống' })
  gia: string;

  @IsNotEmpty({ message: 'Tính năng không được để trống' })
  tinhnang: string;

  @IsNotEmpty({ message: 'Giá gói tivi giải trí không được để trống' })
  giaTVGT: string;

  @IsNotEmpty({ message: 'Giá gói tivi đẳng cấp không được để trống' })
  giaTVDC: string;
  @IsNotEmpty({ message: 'Giá camera không được để trống' })
  giaCamera: string;

  image: string;
}
