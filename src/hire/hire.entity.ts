import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Car } from '../cars/car.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum RateRole {
    FIRSTRATE = 270,
    SECONDRATE = 330,
    THIRDRATE = 390,
}

@Entity()
export class Hire {
    /**
     * The name of Hire car
     * @example Hire car
     */

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'Choice car for hire' })
    @OneToOne(() => Car, (car) => car.hire)
    @JoinColumn()
    car: Car;

    @ApiProperty({
        description: 'The rate for hire car',
        enum: ['FIRSTRATE', 'SECONDRATE', 'THIRDRATE'],
    })
    @Column({
        type: 'enum',
        enum: RateRole,
        default: RateRole.FIRSTRATE,
    })
    rate: RateRole;

    @ApiProperty({ description: 'Date created hire' })
    @Column({ type: 'date' })
    createRateDate: string;

    @ApiProperty({ description: 'Date end hire' })
    @Column({ type: 'date' })
    endRateDate: string;

    @ApiProperty({ description: 'The available field' })
    @Column({ default: false })
    isAvailable: boolean;
}
