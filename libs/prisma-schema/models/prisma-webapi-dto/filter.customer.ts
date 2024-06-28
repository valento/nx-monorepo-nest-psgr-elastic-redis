import { BadRequestException, applyDecorators, createParamDecorator } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { Request } from "express";

export interface Filtering {
  property: string,
  rule: string,
  value: string
}

export const FilterParam = createParamDecorator((
  filters,
  ctx: ExecutionContext
):Filtering => {
  const request: Request = ctx.switchToHttp().getRequest()
  const filter = request.query['filter'] as string
  if(!filter) return null as any

  // TODO: validate filter object
  // if typeof is  object
  // match some filter signature
  const [property,rule,value] = filter.split(':')
  return { property, rule, value}
})

export const ApiFilteringQuery = (params: string[]) => applyDecorators(
  ApiQuery({
    name: 'filter',
    required: false,
    explode: false,
    type: String,
    description: `Filters available format: ?filter=property:(age), allowed:${JSON.stringify(params)}`
  })
)

export enum Rules {
  GREATER = 'gt',
  LESS = 'lt',
  EQUAL = 'eq'
}