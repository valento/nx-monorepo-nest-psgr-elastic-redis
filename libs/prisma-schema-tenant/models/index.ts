import { UpdateTester as _update_tester } from './prisma-tenant-dto/update.dto';
import { CreateTester as _create_tester } from './prisma-tenant-dto/create.dto';

export namespace PrismaModel {
  export class UpdateTester extends _update_tester {}
  export class CreateTester extends _create_tester {}

  // export const extraModels = [UpdateTester, CreateTester];
}
