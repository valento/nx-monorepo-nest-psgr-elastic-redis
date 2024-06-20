import { Injectable } from '@nestjs/common';
import { PrismaClientTenantService } from '@single-client-api/prisma-client-service-tenant';
import { PrismaModel } from '@single-client-api/prisma-schema-tenant/models'

@Injectable()
export class TenantDaoService {
  constructor(
    private client: PrismaClientTenantService
  ) {}

  createTester = async ( id: number, body: PrismaModel.CreateTester) => {
    try {
      const tester = this.client.tester.create({
        data: body
      })
      return {
        success: true,
        message: 'User saved successfully...',
        data: tester
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }

  updateTester = async ( uuid: string, body: PrismaModel.UpdateTester) => {
    try {
      const updateTester = this.client.tester.update({
        where: { uuid },
        data: body
      })
      return {
        success: true,
        message: 'User saved successfully...',
        data: updateTester
      }
    } catch (error) {
      return {
        success: false,
        message: error
      }
    }
  }
}
