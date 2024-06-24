import { CreateTester as _create_tester } from './prisma-tenant-dto/create.tester.dto'
import { UpdateTester as _update_tester } from './prisma-tenant-dto/update.tester.dto'

import { CreateCategory as _create_category } from './prisma-tenant-dto/create.category.dto'
import { UpdateCategory as _update_category } from './prisma-tenant-dto/update.category.dto'

export namespace PrismaModel {
  export class CreateTester extends _create_tester {}
  export class UpdateTester extends _update_tester {}
  
  export class CreateCategory extends _create_category {}
  export class UpdateCategory extends _update_category {}
  // export class extendedTester extends _create_tester{}

  // export const extraModels = [tester, category];
}
