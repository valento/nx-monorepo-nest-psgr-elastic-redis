import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class customer {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string = 'Anon';

  @ApiPropertyOptional({ type: Number })
  age?: number;

  @ApiProperty({ type: String })
  type: string = 'newbie';

  @ApiPropertyOptional({ type: String })
  quote?: string;
}
