import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  companyValue: number;

  @Column()
  salary: number;

  @Column({ default: false })
  isSelected: boolean;
}
