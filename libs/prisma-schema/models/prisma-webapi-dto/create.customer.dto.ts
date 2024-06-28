import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UpdateCustomer } from './update.customer.dto';

export class CreateCustomer {

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @IsNumber()
  age?: number;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  type?: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  quote?: string;
}

export class CustomerSearchResults {
  hits: {
    total: number,
    hits: Array<{_source: UpdateCustomer}>
  }
}