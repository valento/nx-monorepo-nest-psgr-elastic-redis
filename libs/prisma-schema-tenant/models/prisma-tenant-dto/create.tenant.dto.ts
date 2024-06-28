import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTenant {

  @ApiProperty({ type: String })
  @IsString()
  name: string = 'Anonymous Tenant';

  @ApiProperty({ type: Number })
  @IsString()
  phone?: string;

  @ApiProperty({ type: String })
  @IsString()
  address?: string;
}
