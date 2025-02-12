import { TenantCategory } from '@/domain/tenant/vo/tenant-category.vo';
import { TenantStatus } from '@/domain/tenant/vo/tenant-status.vo';

export class CreateTenantCommand {
  constructor(
    public readonly name: string,
    public readonly database: string,
    public readonly schema: string,
    public readonly description?: string,
    public readonly status?: TenantStatus,
    public readonly organizationCode?: string,
    public readonly organizationName?: string,
    public readonly category?: TenantCategory
  ) {}
}
