import { Injectable } from '@nestjs/common';
// import { customer } from '.prisma/schema-webapi/client/webapi';
import { PrismaClientWebapiService } from '@single-client-api/prisma-client-web'
import { PrismaModel } from '@single-client-api/prisma-schema/models';

@Injectable()
export class WebapiService {
  constructor(
    private client: PrismaClientWebapiService
  ) {}

  get = async (id: number) => {
    try {
      const customer = await this.client.customer.findUnique({
        where: { id }
      })

      return {
        success: true,
        data: customer
      }
    } catch (err) {
      return {
        success: false,
        message: err
      }
    }
  }

  getAll = async () => {
    try {
      
      const results = await this.client.customer.findMany()

      return {
        success: true,
        results
      }

    } catch(error) {
      return {
        success: false,
        message: error
      }
    }
  }

  create = async ( data: PrismaModel.CreateCustomer ) => {
    try {
      const result = await this.client.customer.create({ data: data })

      return ({
        success: true,
        message: "Customer created successfully...",
        result
      })
    } catch(error) {

      return({
        success: false,
        message: error
      })
    }
  }

  update = async ( id: number, data: PrismaModel.UpdateCustomer ) => {
    try {
      console.log('Type of ID:', typeof(id))
      const result = await this.client.customer.update({
        where: { id },
        data
      })

      return ({
        success: true,
        message: "Customer updated successfully...",
        result
      })
    } catch(error) {
    console.error(error)
    return({
        success: false,
        message: error
      })
    }
  }
}
