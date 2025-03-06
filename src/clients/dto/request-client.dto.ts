import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class RequestClientDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @MinLength(1)
  @IsNotEmpty()
  companyValue: number;

  @IsNumber()
  @MinLength(1)
  @IsNotEmpty()
  salary: number;

  @IsBoolean()
  isSelected: boolean;
}
