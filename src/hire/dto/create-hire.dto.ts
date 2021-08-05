import { Car } from '../../cars/car.entity';
import { IsInt, IsDate, IsBoolean } from 'class-validator';

export class CreateHireDto {
    @IsInt()
    readonly rate: number;

    car: Car;

    @IsDate()
    readonly createRateDate: string;

    @IsDate()
    readonly endRateDate: string;

    @IsBoolean()
    readonly isAvailable: boolean;
}
