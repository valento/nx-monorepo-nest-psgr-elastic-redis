import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch'

@Injectable()
export class ElasticSearchService {
  constructor(
    private elasticSearchService: ElasticsearchService
  ){}

  createSearchPost = async (body: any) => {
    try {
      return this.elasticSearchService.index({
        index: 'testers',
        body: {
          testerId: body.uuid,
          testerName: body.name
        }
      })
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }

  updateSearch = async () => {
    // 
  }
}
