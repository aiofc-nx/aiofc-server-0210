import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { GetTenantQuery } from '../queries/get-tenant.query';

import { Tenant } from '@/domain/tenant/entities/tenant.entity';
import { TenantRepository } from '@/domain/tenant/repositories/tenant.repository';
import { TenantId } from '@/domain/tenant/vo/tenant-id.vo';

@QueryHandler(GetTenantQuery)
export class GetTenantHandler implements IQueryHandler<GetTenantQuery> {
  constructor(private readonly tenantRepository: TenantRepository) {}

  async execute(query: GetTenantQuery): Promise<Tenant | null> {
    return this.tenantRepository.findById(TenantId.from(query.id));
  }
}
