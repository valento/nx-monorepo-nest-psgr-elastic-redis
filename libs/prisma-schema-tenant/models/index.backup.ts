import { UpdateTester as _update_tester } from './prisma-tenant-dto/update.tester.dto';
import { CreateTester as _create_tester } from './prisma-tenant-dto/create.tester.dto';

export namespace PrismaModel {
  export class UpdateTester extends _update_tester {}
  export class CreateTester extends _create_tester {}

  // export const extraModels = [UpdateTester, CreateTester];
}