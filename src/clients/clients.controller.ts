import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { RequestClientDto } from './dto/request-client.dto';
import { ResponseClientDTO } from './dto/response-client.dto';
import { PaginationDto } from './dto/pagination.dto';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { ClientPayload } from './dto/client-payload.dto';
import { FindAllClientsResponseDTO } from './dto/find-all-clients.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiOperation({ summary: 'Create a client' })
  @ApiResponse({
    status: 201,
    description: 'The client has been successfully created.',
    type: ClientPayload,
  })
  @ApiBadRequestResponse({ description: 'Bad request' })
  @Post()
  async create(@Body() createClientDto: RequestClientDto) {
    const createdClient = await this.clientsService.create(createClientDto);

    return new ResponseClientDTO(createdClient);
  }

  @Get()
  @ApiOperation({ summary: 'List all clients with filters and pagination' })
  @ApiResponse({
    status: 200,
    description: 'Client list returned successfully',
    type: FindAllClientsResponseDTO,
  })
  async findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('isSelected') isSelected?: boolean,
    @Query('name') name?: string,
  ) {
    return await this.clientsService.findAll(
      page ? Number(page) : 1,
      limit ? Number(limit) : 10,
      { isSelected, name },
    );
  }

  @Get('selected')
  @ApiOperation({
    summary: 'List all selected clients with filters and pagination',
  })
  @ApiResponse({
    status: 200,
    description: 'Client list returned successfully',
    type: FindAllClientsResponseDTO,
  })
  async findAllSelectedClients(@Query('isSelected') isSelected?: boolean) {
    return await this.clientsService.findAllSelectedClients({ isSelected });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a client' })
  @ApiResponse({
    status: 200,
    description: 'Client list returned successfully',
    type: ClientPayload,
  })
  findOne(@Param('id') id: string) {
    return this.clientsService.findById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a client' })
  @ApiResponse({
    status: 200,
    description: 'Client list returned successfully',
    type: ClientPayload,
  })
  update(
    @Param('id') id: string,
    @Body() updateClientDto: Partial<RequestClientDto>,
  ) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Post('batch-update')
  @ApiOperation({ summary: 'Update multiple clients' })
  @ApiResponse({
    status: 200,
    description: 'Client list updated successfully',
    type: FindAllClientsResponseDTO,
  })
  batchUpdate(
    @Body() batchUpdateDto: { ids: number[]; data: Partial<RequestClientDto> },
  ) {
    return this.clientsService.batchUpdate(
      batchUpdateDto.ids,
      batchUpdateDto.data,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a client' })
  @ApiResponse({
    status: 200,
    description: 'Client deleted successfully',
  })
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
