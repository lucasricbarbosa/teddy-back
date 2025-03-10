import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class RequestClientDto {
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
}
