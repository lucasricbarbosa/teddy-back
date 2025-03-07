import { ApiProperty } from '@nestjs/swagger';
import { PaginationResponseDTO } from './pagination-response.dto';
import { ClientPayload } from './client-payload.dto';

export class FindAllClientsResponseDTO {
  @ApiProperty({
    type: [ClientPayload],
    description: 'Lista de clientes',
  })
  clients: ClientPayload[];

  @ApiProperty({
    type: PaginationResponseDTO,
    description: 'Informações de paginação',
  })
  pagination: PaginationResponseDTO;
}
