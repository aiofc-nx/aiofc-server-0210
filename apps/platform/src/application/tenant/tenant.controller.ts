import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateTenantCommand } from './commands/create-tenant.command';
import { GetTenantQuery } from './queries/get-tenant.query';

@Controller('tenants')
export class TenantController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post()
  async create(@Body() createTenantDto: CreateTenantCommand): Promise<void> {
    return this.commandBus.execute(
      new CreateTenantCommand(
        createTenantDto.name,
        createTenantDto.database,
        createTenantDto.schema
      )
    );
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.queryBus.execute(new GetTenantQuery(id));
  }
}
