import { PartialType } from '@nestjs/mapped-types';
import { CreateTiviDto } from './create-tivi.dto';

export class UpdateTiviDto extends PartialType(CreateTiviDto) {}
