import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enums';
import {
  Permission,
  PermissionType,
} from '../../iam/authorization/permission.type';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;

  /**
   * NOTE: Having the "permission" column i combination with the "role"
   * likely does not make sense. We use both in this course juect to showcase
   * two different approaches to authorzation
   */
  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType[];
}
