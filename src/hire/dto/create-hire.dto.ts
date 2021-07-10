import { IsString, IsNumber, IsNumberString} from 'class-validator';

export class CreateHireDto {
    rate: number;
    createRateDate: string;
    endRateDate: string;
    isAvailable: boolean;
}
