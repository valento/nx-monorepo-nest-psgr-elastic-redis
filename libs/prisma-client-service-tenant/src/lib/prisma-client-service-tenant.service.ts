import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma } from '@prisma/schema-tenant/client/tenant'
import { PrismaClient } from '@prisma/schema-tenant/client/tenant';

export type ModelName = Prisma.ModelName

export type PrismaModelProp<N extends ModelName = ModelName> = Uncapitalize<N>

export const getPrismaModelProp = <N extends ModelName>(name: N) =>
  `${name.charAt(0).toLowerCase()}${name.slice(1)}` as PrismaModelProp<N>

export const getPrismaDelegate = <N extends ModelName>(name: N, prisma: PrismaClient) =>
  prisma[getPrismaModelProp(name)] as PrismaModelDelegate<N> as any

export type PrismaModelDelegate<N extends ModelName = ModelName> = PrismaClient[PrismaModelProp<ModelName>]
@Injectable()
export class PrismaClientTenantService extends PrismaClient implements OnModuleInit {

  async onModuleInit() {
    await this.$connect()
  }
}
