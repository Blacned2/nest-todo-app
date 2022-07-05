import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { IndexPageContent } from './model/index-page-content';

@Injectable()
export class IndexPageService {

    pageListItem: IndexPageContent[];
    content:any;
    constructor(
        @InjectRepository(IndexPageContent) private indexPageRepository: Repository<IndexPageContent>
    ) { }

    findAll(): Promise<IndexPageContent[]> {
        return this.indexPageRepository.find();
    }

    getThePage(id: number): Promise<IndexPageContent> {
        return this.indexPageRepository.findOne({ where: { id: id } });
    }

    createOrUpdatePageItem(indexPageContent: IndexPageContent): boolean {
        try {
            this.indexPageRepository.findOne({where:{id:indexPageContent.id}}).then(result => {
                this.content = result;
            }).then(() => {
                if (this.content == undefined) {
                    this.indexPageRepository.create(indexPageContent);
                } else {
                    this.indexPageRepository.save(indexPageContent);
                }
            });
            return true;
        } catch (error) {
            return false;
        }
    }

}
