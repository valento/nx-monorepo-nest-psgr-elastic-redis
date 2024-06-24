// import { customer as _customer } from './customer'
import { UpdateCustomer as _update_customer } from './prisma-webapi-dto/update.customer.dto'
import { CreateCustomer as _create_customer } from './prisma-webapi-dto/create.customer.dto'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PrismaModel {
  export class CreateCustomer extends _create_customer {}
  export class UpdateCustomer extends _update_customer {}

  // export class customer extends _customer {}

  // export const extraModels = [customer];
}
