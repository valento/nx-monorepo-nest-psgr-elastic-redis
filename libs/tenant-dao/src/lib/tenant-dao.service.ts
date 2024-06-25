import { Injectable } from '@nestjs/common';
import { PrismaClientTenantService, PrismaModelProp, getPrismaDelegate } from '@single-client-api/prisma-client-service-tenant';
import { PrismaModel } from '@single-client-api/prisma-schema-tenant/models'
import { tester } from '.prisma/schema-tenant/client/tenant';


@Injectable()
export class TenantDaoService {
  constructor(
    private client: PrismaClientTenantService,
    // private delegate: PrismaModelDelegate
  ) {}

  getOne = async ( uuid: string, entity: PrismaModelProp ) => {
    
    const delegate = this.getDelegate( entity )

    try {
      const data = await delegate.findUnique({
        where: { uuid }
      })

      return {
        data,
        success: true,
        message: 'Object found'
      }

    } catch (error) {
      return {
        success: false,
        message: 'Object not found in DB'
      }
    }
  }
  
  getAll = async ( entity: PrismaModelProp) => {
    const delegate = this.getDelegate( entity )

    try {
      const data: tester[] = await delegate.findMany()

      return {
        success: true,
        message: `All ${entity.toString()} fetched successfully...d`,
        data
      }
    } catch(error) {
      return {
        success: false,
        message: error
      }
    }
  }

  createTester = async ( body: PrismaModel.CreateTester, entity: PrismaModelProp) => {
    
    const delegate = this.getDelegate( entity )
    
    try {
      const data = delegate.create({ data: body })

      return {
        success: true,
        message: 'User saved successfully...',
        data
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }

  
  updateTester = async ( uuid: string, body: PrismaModel.UpdateTester, entity: PrismaModelProp) => {
    
    const delegate = this.getDelegate( entity )
    
    try {
      const data = delegate.update({
        whereUnique: { uuid },
        data: body
      })

      if(data) {
      // REDIS poke SearcheEngine Microservice
        // 
        return {
          success: true,
          message: 'User updated successfully...',
          data
        }
    } else {
      return {
        success: false,
        message: new Error('User not updates...')
      }
    }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }

  private getDelegate = (entity: PrismaModelProp) => {
    return getPrismaDelegate( entity, this.client )
  }
}
