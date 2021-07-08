import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Car } from '../cars/car.entity';


export enum RateRole {
	FIRSTRATE = 270,
	SECONDRATE = 330,
	THIRDRATE = 390,
}

@Entity()
export class Hire {

	@PrimaryGeneratedColumn()
	id: number;

	@OneToOne(() => Car, car => car.hire)
	@JoinColumn()
	car: Car;

	@Column({
		type: 'enum',
		enum: RateRole,
		default: RateRole.FIRSTRATE
	})
	rate: RateRole

	@Column({ type: 'date' })
	createRateDate: string;

	@Column({ type: 'date' })
	endRateDate: string;

	@Column({ default: false })
	isAvailable: boolean;
}
