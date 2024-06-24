import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class customer {
  @ApiProperty({ type: Number })
  @IsNotEmpty()
  id: number;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ type: Number })
  age?: number;

  @ApiPropertyOptional({ type: String })
  type?: string;

  @ApiPropertyOptional({ type: String })
  moto?: string;
}
