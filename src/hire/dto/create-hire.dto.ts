import { ApiProperty } from '@nestjs/swagger';
import { Car } from '../../cars/car.entity';
import { IsInt, IsDate, IsBoolean } from 'class-validator';

export class CreateHireDto {
    @ApiProperty({ enum: ['FIRSTRATE', 'SECONDRATE', 'THIRDRATE'] })
    @IsInt()
    rate: number;

    @ApiProperty({ type: () => Car })
    car: Car;

    @ApiProperty()
    @IsDate()
    createRateDate: string;

    @ApiProperty()
    @IsDate()
    endRateDate: string;

    @ApiProperty()
    @IsBoolean()
    isAvailable: boolean;
}
