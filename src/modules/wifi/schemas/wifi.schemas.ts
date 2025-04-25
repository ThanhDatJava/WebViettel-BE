import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WifiDocument = HydratedDocument<Wifi>;

@Schema({ timestamps: true })
export class Wifi {
  @Prop()
  goicuoc: string;

  @Prop()
  tinhnang: string;

  @Prop()
  gia: string;

  @Prop()
  giaTVGT: string;

  @Prop()
  giaTVDC: string;

  @Prop()
  giaCamera: string;

  @Prop()
  image: string;
}

export const WifiSchema = SchemaFactory.createForClass(Wifi);
