import { Injectable } from '@nestjs/common';
import { RequestClientDto } from './dto/request-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { Repository } from 'typeorm';

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

  async findAll() {
    return await this.clientsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: Partial<RequestClientDto>) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
