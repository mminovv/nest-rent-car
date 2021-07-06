import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Car } from './entities/car.entity'


@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [CarsController],
  exports: [CarsService],
  providers: [CarsService]
})
export class CarsModule {}
