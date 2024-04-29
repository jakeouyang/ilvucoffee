import { Role } from '../../users/enums/role.enums';
import { PermissionType } from '../authorization/permission.type';

export interface ActiveUserData {
  /**
   * The "subject" of the Token. The value of this property is the user ID
   * that granted this token.
   */
  sub: number;

  /**
   * The subject's (user) email.
   */
  email: string;

  /**
   * The subject's (User) role.
   */
  role: Role;

  /**
   * NOTE: Having the "permission" column i combination with the "role"
   * likely does not make sense. We use both in this course juect to showcase
   * two different approaches to authorzation
   */
  permissions: PermissionType[];
}
