import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTester {

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  name: string;

}
