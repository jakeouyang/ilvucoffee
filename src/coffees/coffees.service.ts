import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffee: Coffee[] = [
    {
      id: 1,
      name: 'Blue Sky',
      brand: 'Tian Rose',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffee;
  }

  findOne(id: number) {
    return this.coffee.find((item) => item.id === id);
  }

  create(createCoffeeDto: any) {
    return this.coffee.push(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: any) {
    const index = this.coffee.findIndex((item) => item.id === id);
    if (index != -1) {
      Object.assign(this.coffee[index], updateCoffeeDto);
    } else {
      throw new NotFoundException(`Coffee #${id} Not Found`);
    }
  }

  remove(id: number) {
    const coffeeIndex = this.coffee.findIndex((item) => item.id === id);
    if (coffeeIndex >= 0) {
      this.coffee.splice(coffeeIndex, 1);
    }
  }
}
