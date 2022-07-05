import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { IndexPageService } from './index-page.service';
import { IndexPageContent } from './model/index-page-content';

@Controller('index-page')
@ApiTags('IndexPage')
export class IndexPageController {

    constructor(private indexPageService: IndexPageService) { }

    @Get()
    async getAll() {
        this.indexPageService.findAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        return this.indexPageService.getThePage(id);
    }

    @Post()
    // @ApiQuery({ name: 'id', type: Number, description: 'optional', required: false })
    async update(@Body() indexPageContent: IndexPageContent) {
        this.indexPageService.createOrUpdatePageItem(indexPageContent);
    }

}
