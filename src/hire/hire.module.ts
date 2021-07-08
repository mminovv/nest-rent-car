import { Module } from '@nestjs/common';
import { HireService } from './hire.service';
import { HireController } from './hire.controller';
import { CarsModule } from '../cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Car } from '../cars/car.entity'
import { Hire } from './hire.entity'



@Module({
  imports: [CarsModule, TypeOrmModule.forFeature([Car, Hire])],
  controllers: [HireController],
  providers: [HireService]
})
export class HireModule {}
