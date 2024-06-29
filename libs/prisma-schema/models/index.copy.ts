// import { customer as _customer } from './customer'
import { UpdateCustomer as _update_customer } from './prisma-webapi-dto/update.customer.dto'
import { CustomerSearchResults as _search_customer } from './prisma-webapi-dto/create.customer.dto'
import { CreateCustomer as _create_customer } from './prisma-webapi-dto/create.customer.dto'

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PrismaModel {
  export class CreateCustomer extends _create_customer {}
  export class CustomerSearchResults extends _update_customer {}

  export class UpdateCustomer extends _update_customer {}

  // export const extraModels = [customer];
}

export * from './prisma-webapi-dto/filter.customer'