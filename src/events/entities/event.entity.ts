import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type'])
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  paylaod: Record<string, any>;
}
