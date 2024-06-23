import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PrismaModelProp } from '../../prisma-client-service-tenant/src';

export class category {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiProperty({ type: String })
  entity: PrismaModelProp;
}
