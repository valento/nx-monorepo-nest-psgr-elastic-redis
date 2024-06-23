import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTester {

  @ApiProperty({ type: String })
  @IsString()
  name: string = 'Tester';

}
