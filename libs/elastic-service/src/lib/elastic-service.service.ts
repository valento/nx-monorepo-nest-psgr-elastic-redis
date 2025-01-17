import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch'

import { PrismaModel } from '@single-client-api/prisma-schema/models';

@Injectable()
export class ElasticSearchService {
  private index = 'customers'
  constructor(
    private es: ElasticsearchService
  ){}

  // =================================================================
  // --- Index Node  actions -----------------------------------------

  indexCustomer = async (customer: PrismaModel.UpdateCustomer) => {
    try {
      return this.es.index<PrismaModel.CustomerSearchResults>({
        index: this.index,
        body: {
          id: customer.id,
          name: customer.name,
          age: customer.age,
          type: customer.type,
          quote: customer.quote,
        }
      })
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }

  search = async (text: string) => {
    const body = await this.es.search<PrismaModel.CustomerSearchResults>({
      index: this.index,
      body: {
        query: {
          multi_match: {
            query: text,
            fields: ['name','quote','type', 'age']
          }
        }
      }
    })
    const hits = body.hits.hits
    return hits.map( item => item._source )
  }

  remove = async (id: number) => {
    this.es.deleteByQuery({
      index: this.index,
      body: {
        query: {
          match: {id}
        }
      }
    }) 
  }

  // =================================================================
  // --- Main Node events -------------------------------------------

  updateSearch = async () => {
    // 
  }
}
