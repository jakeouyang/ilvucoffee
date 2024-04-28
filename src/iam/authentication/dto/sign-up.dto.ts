import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({ description: 'The name of a email.' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The name of a password.' })
  @MinLength(10)
  password: string;
}
