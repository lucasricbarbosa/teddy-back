import { ClientEntity } from './../entities/client.entity';

export class ResponseClientDTO {
  id?: number;
  name?: string;
  companyValue?: number;
  salary?: number;
  isSelected?: boolean;

  constructor(client: Partial<ClientEntity>) {
    this.id = client.id as number;
    this.name = client.name as string;
    this.companyValue = client.companyValue as number;
    this.salary = client.salary as number;
    this.isSelected = client.isSelected as boolean;
  }
}
