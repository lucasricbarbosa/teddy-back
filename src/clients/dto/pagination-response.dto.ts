import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponseDTO {
  @ApiProperty({ example: 100, description: 'Total de registros' })
  total: number;

  @ApiProperty({ example: 10, description: 'Total de páginas' })
  totalPages: number;

  @ApiProperty({ example: 1, description: 'Página atual' })
  currentPage: number;

  @ApiProperty({ example: 10, description: 'Limite de registros por página' })
  limit: number;

  @ApiProperty({
    example: true,
    description: 'Indica se existe próxima página',
  })
  hasNext: boolean;

  @ApiProperty({
    example: false,
    description: 'Indica se existe página anterior',
  })
  hasPrevious: boolean;
}
