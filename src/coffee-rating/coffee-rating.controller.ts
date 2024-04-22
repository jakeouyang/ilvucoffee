import { Controller, Get, Query } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('rating')
export class CoffeeRatingController {
  constructor(private readonly coffeeRatingService: CoffeeRatingService) {}

  @Get()
  findAll(@Query() pagination: PaginationQueryDto) {
    return this.coffeeRatingService.findAll(pagination);
  }
}
