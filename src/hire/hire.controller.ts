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
import { HireService } from './hire.service';
import { CreateHireDto } from './dto/create-hire.dto';
import { UpdateHireDto } from './dto/update-hire.dto';

@ApiTags('hire')
@Controller('hire')
export class HireController {
    constructor(private readonly hireService: HireService) {}

    @ApiOperation({ summary: 'Create hire' })
    @ApiResponse({ status: 201, description: 'Hire sucsesfully created' })
    @ApiBody({ type: [CreateHireDto] })
    @Post()
    create(@Body() createHireDto: CreateHireDto) {
        return this.hireService.create(createHireDto);
    }

    @ApiResponse({ status: 200, description: 'The all hired cars' })
    @Get()
    findAll() {
        return this.hireService.findAll();
    }

    @ApiResponse({ status: 200, description: 'The hire car by id' })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.hireService.findOne(+id);
    }

    @ApiResponse({ status: 204, description: 'Hire sucsesfully updated' })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateHireDto: UpdateHireDto) {
        return this.hireService.update(+id, updateHireDto);
    }

    @ApiResponse({ status: 202, description: 'Hire sucsesfully deleted' })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.hireService.remove(+id);
    }
}
