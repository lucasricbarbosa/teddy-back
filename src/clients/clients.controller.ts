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

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: RequestClientDto) {
    const createdClient = await this.clientsService.create(createClientDto);

    return new ResponseClientDTO(createdClient);
  }

  @Get()
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
  async findAllSelectedClients(@Query('isSelected') isSelected?: boolean) {
    return await this.clientsService.findAllSelectedClients({ isSelected });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findById(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientDto: Partial<RequestClientDto>,
  ) {
    return this.clientsService.update(+id, updateClientDto);
  }

  @Post('batch-update')
  batchUpdate(
    @Body() batchUpdateDto: { ids: number[]; data: Partial<RequestClientDto> },
  ) {
    return this.clientsService.batchUpdate(
      batchUpdateDto.ids,
      batchUpdateDto.data,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientsService.remove(+id);
  }
}
