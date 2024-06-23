import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTester {

  @ApiProperty({ type: String })
  name: string = 'Tester';
}
