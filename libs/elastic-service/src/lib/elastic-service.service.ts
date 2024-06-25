import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch'

import { PrismaModel } from '@single-client-api/prisma-schema/models';

@Injectable()
export class ElasticSearchService {
  constructor(
    private es: ElasticsearchService
  ){}

  // =================================================================
  // --- Index Node  actions -----------------------------------------

  indexCustomer = async (customer: PrismaModel.UpdateCustomer) => {
    try {
      return this.es.index<PrismaModel.CustomerSearchResults>({
        index: 'customers',
        body: {
          id: customer.id,
          name: customer.name,
          age: customer.age,
          moto: customer.moto,
          type: customer.type
        }
      })
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }

  search = async (text: string) => {
    const body = await this.es.search<PrismaModel.CustomerSearchResults>({
      index: 'customer',
      body: {
        query: {
          multi_match: {
            query: text,
            fields: ['name','moto','type']
          }
        }
      }
    })
    const hits = body.hits.hits
    return hits.map( item => item._source )
  }

  // =================================================================
  // --- Main Node events -------------------------------------------

  updateSearch = async () => {
    // 
  }
}
