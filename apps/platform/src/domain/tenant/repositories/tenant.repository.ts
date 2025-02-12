import { Tenant } from '../entities/tenant.entity';
import { TenantId } from '../vo/tenant-id.vo';

export abstract class TenantRepository {
  abstract save(tenant: Tenant): Promise<void>;
  abstract findById(id: TenantId): Promise<Tenant | null>;
  abstract findAll(): Promise<Tenant[]>;
}
