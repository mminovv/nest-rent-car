import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Hire } from '../hire/hire.entity';

import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Car {
    /**
     * The name of Car
     * @example Car
     */

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'The name of car brand' })
    @Column('varchar', { length: 200 })
    carBrand: string;

    @ApiProperty({ description: 'The model of car' })
    @Column('varchar', { length: 200 })
    model: string;

    @ApiProperty({ description: 'Government number of car' })
    @Column({ width: 25, type: 'int' })
    govNumber: number;

    @ApiProperty({ description: 'Vin number of car' })
    @Column('varchar', { length: 20 })
    vin: string;

    @OneToOne(() => Hire, (hire) => hire.car)
    hire: Hire;
}
