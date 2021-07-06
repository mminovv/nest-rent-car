import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {

	@PrimaryGeneratedColumn()
	id: number;

	@Column("varchar", { length: 200 })
	carBrand: string;

	@Column("varchar", { length: 200 })
	model: string;

	@Column({ width: 25, type: "int"})
	govNumber: number;

	@Column("varchar", { length: 20 })
	vin: string
}
