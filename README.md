## Version compatibility issues ｜ 版本兼容性问题

typeorm 2.x -> 3.x

1.findOne() Query method changes | 查询方法变更
```typescript
async findOne(id: number) {
    const coffee = await this.coffeeRepository.findOne({
      where: {
        id: id,
      },
      relations: ['flavors'],
    });
    if (!coffee) {
      throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }
```

2. Transaction ｜ 事务处理
```typescript
private readonly dataSource: DataSource

async recommendCoffee(coffee: Coffee) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      coffee.recommendations++;

      const recommendEvent = new Event();
      recommendEvent.name = 'recommend_coffee';
      recommendEvent.type = 'coffee';
      recommendEvent.paylaod = { coffeeId: coffee.id };

      await queryRunner.manager.save(coffee);
      await queryRunner.manager.save(recommendEvent);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
```

3. Migrations | 数据迁移
```typescript
const typeorm = require('typeorm');

module.exports = new typeorm.DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});

```
```bash
npx typeorm migration:create ./src/migrations/PostRefactoring 
```
## Description

Nestjs official tutorial source code is divided into different branches according to the learning stage.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```