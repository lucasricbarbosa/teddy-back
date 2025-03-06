import { Injectable, NotFoundException } from '@nestjs/common';
import { RequestClientDto } from './dto/request-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { FindOptionsWhere, In, Like, Repository } from 'typeorm';
import { ResponseClientDTO } from './dto/response-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
  ) {}

  async create(createClientDto: RequestClientDto) {
    const newClient = this.clientsRepository.create(createClientDto);

    return await this.clientsRepository.save(newClient);
  }

  async findAll(
    page: number = 1,
    limit: number = 10,
    filters: {
      name?: string;
      isSelected?: boolean;
    } = {},
  ) {
    const validPage = page < 1 ? 1 : page;
    const validLimit = limit < 1 ? 10 : limit > 100 ? 100 : limit;
    const skip = (validPage - 1) * validLimit;

    const where: FindOptionsWhere<ClientEntity> = {};

    if (filters.isSelected !== undefined) {
      where.isSelected = filters.isSelected;
    }

    if (filters.name) {
      where.name = Like(`%${filters.name}%`);
    }

    const totalClients = await this.clientsRepository.count({ where });

    const clients = await this.clientsRepository.find({
      where,
      skip,
      take: validLimit,
      order: { id: 'ASC' },
    });

    const formattedClients = clients.map(
      (client) => new ResponseClientDTO(client),
    );

    return {
      clients: formattedClients,
      pagination: {
        total: totalClients,
        totalPages: Math.ceil(totalClients / validLimit),
        currentPage: validPage,
        limit: validLimit,
        hasNext: validPage < Math.ceil(totalClients / validLimit),
        hasPrevious: validPage > 1,
      },
    };
  }

  async findAllSelectedClients(
    filters: {
      isSelected?: boolean;
    } = {},
  ) {
    const where: FindOptionsWhere<ClientEntity> = {};

    if (filters.isSelected !== undefined) {
      where.isSelected = filters.isSelected;
    }

    const clients = await this.clientsRepository.find({
      where,
      order: { id: 'ASC' },
    });

    return {
      clients,
    };
  }

  async findById(id: number) {
    const client = await this.clientsRepository.findOne({
      where: {
        id,
      },
    });

    if (!client) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    return client;
  }

  async update(id: number, data: Partial<RequestClientDto>) {
    const existingClient = await this.clientsRepository.findOne({
      where: { id },
    });

    if (!existingClient) {
      throw new Error('Client not found');
    }

    const clientToUpdate = {
      ...existingClient,
      ...data,
    };

    const updatedClient = await this.clientsRepository.save(clientToUpdate);

    return updatedClient;
  }

  async batchUpdate(ids: number[], data: Partial<RequestClientDto>) {
    const existingClients = await this.clientsRepository.find({
      where: { id: In(ids) },
    });

    if (existingClients.length !== ids.length) {
      const foundIds = existingClients.map((client) => client.id);
      const missingIds = ids.filter((id) => !foundIds.includes(id));
      throw new Error(`Clientes não encontrados: ${missingIds.join(', ')}`);
    }

    const updatedClients = existingClients.map((client) => ({
      ...client,
      ...data,
    }));

    return this.clientsRepository.save(updatedClients);
  }

  async remove(id: number) {
    const existingClient = await this.clientsRepository.findOne({
      where: { id },
    });

    if (!existingClient) {
      throw new Error('Client not found');
    }

    await this.clientsRepository.delete(id);

    return { message: `Client ${id} removed` };
  }
}
