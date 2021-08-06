import { Hire } from '../../hire/hire.entity'


export class CreateRateDto {
	name: string;

	price: number;

	km: number;

	hire: Hire;
}
