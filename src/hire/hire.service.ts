import { Injectable } from '@nestjs/common';
import { CreateHireDto } from './dto/create-hire.dto';
import { UpdateHireDto } from './dto/update-hire.dto';
import { Hire } from './hire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';

@Injectable()
export class HireService {
    constructor(
        @InjectRepository(Hire)
        private readonly hireRepository: Repository<Hire>,
    ) {}

    async create(createHireDto: CreateHireDto) {

        const hire = await this.hireRepository.query(`
            select
            "hire.carId",
            "hire.rateId",
            "hire.createRateDate",
            "hire.endRateDate",
            "hire.endRateDate"::date - "hire.createRateDate"::date as days,
            (select days * rate.price)
            from hire, rate
            `)
        hire.car = createHireDto.car;
        hire.rate = createHireDto.rate;
        hire.createRateDate = createHireDto.createRateDate
        hire.endRateDate = createHireDto.endRateDate
        await this.hireRepository.save(hire);
        return hire;
    }

    findAll(): Promise<Hire[]> {
        return this.hireRepository.find();
    }

    async findOne(id: number): Promise<Hire> {
        return this.hireRepository.findOne(id);
    }

    async update(id: number, updateHireDto: UpdateHireDto) {
        return this.hireRepository.update(id, updateHireDto);
    }

    async remove(id: number): Promise<void> {
        await this.hireRepository.delete(id);
    }
}
