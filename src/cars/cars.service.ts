import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>,
    ) {}

    async create(createCarDto: CreateCarDto): Promise<Car> {
        const car = new Car();
        car.carBrand = createCarDto.carBrand;
        car.model = createCarDto.model;
        car.govNumber = createCarDto.govNumber;
        car.vin = createCarDto.vin;
        return this.carRepository.save(car);
    }

    async findAll(): Promise<Car[]> {
        return this.carRepository.find();
    }

    async findOne(id: number): Promise<Car> {
        return this.carRepository.findOne(id);
    }

    update(id: number, updateCarDto: UpdateCarDto) {
        return this.carRepository.update(id, updateCarDto);
    }

    async remove(id: number): Promise<void> {
        await this.carRepository.delete(id);
    }
}
