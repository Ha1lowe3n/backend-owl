import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
    @Post('create')
    async createTopPage(@Body() dto: Omit<TopPageModel, '_id'>) {}

    @Get(':id')
    async getTopPage(@Param('id') id: string) {}

    @Delete(':id')
    async deleteTopPage(@Param('id') id: string) {}

    // !! dto TopPageModel передаем ли _id или нет
    @Patch(':id')
    async patchTopPage(@Param('id') id: string, @Body() dto: TopPageModel) {}

    @HttpCode(200)
    @Post()
    async findTopPage(@Body() dto: FindTopPageDto) {}
}
