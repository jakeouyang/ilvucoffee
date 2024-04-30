import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../entities/user.entity';

@Entity()
export class ApiKey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  uuid: string;

  @ManyToOne((type) => User, (user) => user.apiKeys)
  user: User;

  /**
   * Note: Aa an exercise, you could create a new rntity called "Scope" and establish
   * a Many-to-Many relationship between API Keys and Scope. With the scopes feature, users
   * could selectively grant specific permissions/scopes ro given API Keys. For example, some
   * API Keys could only let 3-rd party applications "Read" data, but not modify it, etc.
   * @Column()
   * scopes: Scope[]
   */
}
