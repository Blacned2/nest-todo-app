import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndexPageController } from './index-page.controller';
import { IndexPageService } from './index-page.service';
import { IndexPageContent } from './model/index-page-content';

@Module({
  imports: [TypeOrmModule.forFeature([IndexPageContent])],
  providers: [IndexPageService],
  controllers: [IndexPageController],
  exports: [],
})
export class IndexPageModule {}
