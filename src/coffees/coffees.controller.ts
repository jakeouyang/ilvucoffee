import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesServer: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeesServer.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeesServer.findOne(id);
  }

  @Post()
  create(@Body() createCoffeeDto: Coffee) {
    return this.coffeesServer.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCoffeeDto: Coffee) {
    return this.coffeesServer.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.coffeesServer.remove(id);
    return this.coffeesServer.findAll();
  }
}
