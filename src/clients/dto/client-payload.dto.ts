import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class ClientPayload {
  @ApiProperty({
    description: 'The id of the client',
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'The name of the client',
    example: 'Lucas Barbosa',
  })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The company value', example: 32000000 })
  @IsNumber()
  @MinLength(1)
  @IsNotEmpty()
  companyValue: number;

  @ApiProperty({ description: 'The salary', example: 240000 })
  @IsNumber()
  @MinLength(1)
  @IsNotEmpty()
  salary: number;

  @ApiProperty({ description: 'If the client is selected', example: false })
  @IsBoolean()
  isSelected: boolean;

  @ApiProperty({ description: 'The date when the client was created' })
  @IsDate()
  createdAt: Date;

  @ApiProperty({ description: 'The date when the client was updated' })
  @IsDate()
  updatedAt: Date;
}
