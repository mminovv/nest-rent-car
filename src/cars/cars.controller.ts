import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags('cars')
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @ApiOperation({ summary: 'Create car' })
    @ApiResponse({ status: 201, description: 'Car sucsesfully created' })
    @ApiBody({ type: [CreateCarDto] })
    @Post()
    create(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    @ApiResponse({ status: 200, description: 'The all cars' })
    @Get()
    findAll() {
        return this.carsService.findAll();
    }

    @ApiResponse({ status: 200, description: 'The car by id' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.carsService.findOne(+id);
    }

    @ApiResponse({ status: 204, description: 'Car sucsesfully updated' })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(+id, updateCarDto);
    }

    @ApiResponse({ status: 202, description: 'Car sucsesfully deleted' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.carsService.remove(+id);
    }
}
