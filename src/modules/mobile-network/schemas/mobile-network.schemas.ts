import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MobileNetworkDocument = HydratedDocument<MobileNetwork>;

@Schema({ timestamps: true })
export class MobileNetwork {
  @Prop()
  goicuoc: string;

  @Prop()
  tinhnang: string;

  @Prop()
  gia: string;

  @Prop()
  image: string;
}

export const MobileNetworkSchema = SchemaFactory.createForClass(MobileNetwork);
