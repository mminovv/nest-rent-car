import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Length, Max, Min, IsNumberString } from 'class-validator';

export class CreateCarDto {
    @ApiProperty()
    @Length(20)
    carBrand: string;

    @ApiProperty()
    @Length(20)
    model: string;

    @ApiProperty()
    @IsInt()
    @Max(15)
    @Min(5)
    govNumber: number;

    @ApiProperty()
    @IsNumberString()
    @Length(25)
    vin: string;
}
