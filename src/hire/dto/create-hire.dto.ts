import { Car } from '../../cars/car.entity';
import { IsInt, IsDate, IsBoolean } from 'class-validator';
import { Rate } from '../../rate/rate.entity';

export class CreateHireDto {

    car: Car;

    @IsDate()
    readonly createRateDate: string;

    @IsDate()
    readonly endRateDate: string;

    rate: Rate
}
