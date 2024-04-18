import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeeService: CoffeesService) {}
  findAll(pagination: PaginationQueryDto) {
    return this.coffeeService.findAll(pagination);
  }
}
