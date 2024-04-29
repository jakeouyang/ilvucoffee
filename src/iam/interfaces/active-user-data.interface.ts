import { Role } from '../../users/enums/role.enums';

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
}
