import { CreateTenant as _create_tenant } from './prisma-tenant-dto/create.tenant.dto'
import { UpdateTenant as _update_tenant } from './prisma-tenant-dto/update.tenant.dto'

import { CreateCategory as _create_category } from './prisma-tenant-dto/create.category.dto'
import { UpdateCategory as _update_category } from './prisma-tenant-dto/update.category.dto'

export namespace PrismaModel {
  export class CreateTenant extends _create_tenant {}
  export class UpdateTenant extends _update_tenant {}
  
  export class CreateCategory extends _create_category {}
  export class UpdateCategory extends _update_category {}
  // export class extendedTester extends _create_tester{}

  // export const extraModels = [tester, category];
}
