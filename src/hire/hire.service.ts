import { Injectable } from '@nestjs/common';
import { CreateHireDto } from './dto/create-hire.dto';
import { UpdateHireDto } from './dto/update-hire.dto';
import { Hire } from './hire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'


@Injectable()
export class HireService {

    constructor (
        @InjectRepository(Hire)
        private readonly hireRepository: Repository<Hire>
    ) {}

    async create(CreateHireDto: CreateHireDto): Promise<Hire> {
        const hire = new Hire();
        hire.rate = CreateHireDto.rate;
        hire.createRateDate = CreateHireDto.createRateDate;
        hire.endRateDate = CreateHireDto.endRateDate;
        hire.isAvailable = CreateHireDto.isAvailable;
        return this.hireRepository.save(hire);
    }

    async findAll(): Promise<Hire[]> {
        return this.hireRepository.find();
    }

    async findOne(id: number): Promise<Hire> {
        return this.hireRepository.findOne();
    }

    async update(id: number, updateHireDto: UpdateHireDto) {
        return this.hireRepository.update(id, updateHireDto);
    }

    async remove(id: number): Promise<void> {
        await this.hireRepository.delete(id);
    }
}
