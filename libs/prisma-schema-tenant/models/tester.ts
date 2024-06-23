import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PrismaModelProp } from '../../prisma-client-service-tenant/src';

export class tester {
  @ApiProperty({ type: String })
  uuid: string;

  @ApiPropertyOptional({ type: String })
  name?: string = 'Tester';

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;

  @ApiProperty({ type: String })
  entity: PrismaModelProp;
}
