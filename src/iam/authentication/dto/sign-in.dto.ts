import { SignUpDto } from './sign-up.dto';
import { PartialType } from '@nestjs/swagger';

export class SignInDto extends PartialType(SignUpDto) {}
