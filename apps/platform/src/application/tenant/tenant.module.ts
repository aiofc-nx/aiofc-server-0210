import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { TenantRepository } from '../../domain/tenant/repositories/tenant.repository';
import { PostgresTenantRepository } from '../../infrastructure/persistence/tenant/tenant.repository';

import { CreateTenantHandler } from './handlers/create-tenant.handler';
import { GetTenantHandler } from './handlers/get-tenant.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    CreateTenantHandler,
    GetTenantHandler,
    {
      provide: TenantRepository,
      useClass: PostgresTenantRepository,
    },
  ],
})
export class TenantModule {}
