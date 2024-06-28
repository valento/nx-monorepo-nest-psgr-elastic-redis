import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTenant {

  @ApiProperty({ type: String })
  @IsString()
  name?: string;

  @ApiProperty({ type: Number })
  @IsString()
  phone?: string;

  @ApiProperty({ type: String })
  @IsString()
  address?: string;
}
