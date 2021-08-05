import { Injectable } from '@nestjs/common';
import { CreateHireDto } from './dto/create-hire.dto';
import { UpdateHireDto } from './dto/update-hire.dto';
import { Hire } from './hire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HireService {
    constructor(
        @InjectRepository(Hire)
        private readonly hireRepository: Repository<Hire>,
    ) {}

    async create(createHireDto: CreateHireDto): Promise<Hire> {
        const hire = await this.hireRepository.create(createHireDto);
        const day = await this.hireRepository.query(
            `SELECT date_part('day', age(createRateDate, endRateDate)) AS days FROM hire`,
        );
        const sum = await this.hireRepository.query(
            `SELECT *, (days * rate) AS totalSum FROM hire`,
        );
        await this.hireRepository.save(hire, day);
        return hire;
    }

    async findAll(): Promise<Hire[]> {
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
