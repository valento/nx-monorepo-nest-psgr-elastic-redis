import { Injectable } from '@nestjs/common';
import { PrismaDaoService } from '@single-client-api/user-dao';

@Injectable()
export class UserService {
  constructor(
    private client: PrismaDaoService
  ) {}

  get = async (id: number) => {
    try {
      const customer = await this.client.customer.findFirst({
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
}
