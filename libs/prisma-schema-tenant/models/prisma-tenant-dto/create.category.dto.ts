import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategory {

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  name: string = '';
  
}