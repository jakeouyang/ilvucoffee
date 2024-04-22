import { Injectable } from '@nestjs/common';
import { CoffeesService } from '../coffees/coffees.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeService: CoffeesService) {}
  findAll(pagination: PaginationQueryDto) {
    return this.coffeeService.findAll(pagination);
  }
}
