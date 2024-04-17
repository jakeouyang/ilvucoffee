import { IsString, IsInt } from 'class-validator';

export class Coffee {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString({ each: true })
  flavors: string[];
}
