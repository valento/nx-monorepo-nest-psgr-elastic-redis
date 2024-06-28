import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateCustomer {

  @ApiProperty({ type: Number })
  @IsNotEmpty() id: number;

  @ApiProperty({ type: String })
  @IsString()
  name?: string;

  @ApiProperty({ type: Number })
  age?: number;

  @ApiProperty({ type: String })
  @IsNumber()
  type?: string;

  @ApiProperty({ type: String })
  @IsString()
  quote?: string;
}
