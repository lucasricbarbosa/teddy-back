import { ClientEntity } from './../entities/client.entity';

export class ResponseClientDTO {
  id?: number;
  name?: string;
  companyValue?: number;
  salary?: number;
  isSelected?: boolean;

  constructor(client: Partial<ClientEntity>) {
    this.id = client.id;
    this.name = client.name;
    this.companyValue = client.companyValue;
    this.salary = client.salary;
    this.isSelected = client.isSelected;
  }
}
