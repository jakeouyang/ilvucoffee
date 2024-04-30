import {
  IsEmail,
  IsNumberString,
  IsOptional,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ description: 'The name of a email.' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'The name of a password.' })
  @MinLength(10)
  password: string;

  @ApiProperty({ description: 'The name of a tfa.' })
  @IsOptional()
  @IsNumberString()
  tfaCode?: string;
}
