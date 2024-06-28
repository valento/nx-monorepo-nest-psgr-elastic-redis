import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class tenant {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string = 'Anonymous Tenant';

  @ApiPropertyOptional({ type: String })
  phone?: string;

  @ApiPropertyOptional({ type: String })
  address?: string;

  @ApiPropertyOptional({ type: Date })
  created_at?: Date;

  @ApiPropertyOptional({ type: Date })
  updated_at?: Date;
}
