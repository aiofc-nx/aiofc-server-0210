import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';

import { DatabaseService } from '../drizzle/database.service';

import { tenantTable } from './tenant.schema';

import { Tenant } from '@/domain/tenant/entities/tenant.entity';
import { TenantRepository } from '@/domain/tenant/repositories/tenant.repository';
import { TenantCategory } from '@/domain/tenant/vo/tenant-category.vo';
import { TenantId } from '@/domain/tenant/vo/tenant-id.vo';

@Injectable()
export class PostgresTenantRepository implements TenantRepository {
  constructor(private readonly db: DatabaseService) {}

  async save(tenant: Tenant): Promise<void> {
    await this.db.insert(tenantTable).values({
      tenantId: tenant.tenantId,
      name: tenant.name,
      database: tenant.database,
      schema: tenant.schema,
      description: tenant.description,
      status: tenant.status.toString(),
      organization_code: tenant.organizationCode,
      organization_name: tenant.organizationName,
      category: tenant.category.toString(),
    });
  }

  async findById(id: TenantId): Promise<Tenant | null> {
    const result = await this.db
      .select()
      .from(tenantTable)
      .where(eq(tenantTable.id, id.toString()))
      .limit(1);

    if (!result.length) return null;

    const tenantData = result[0];
    return Tenant.create({
      name: tenantData.name,
      database: tenantData.database,
      schema: tenantData.schema,
      description: tenantData.description || undefined,
      organizationCode: tenantData.organization_code || undefined,
      organizationName: tenantData.organization_name || undefined,
      category: tenantData.category as unknown as TenantCategory,
    });
  }

  async findAll(): Promise<Tenant[]> {
    const results = await this.db.select().from(tenantTable);
    return results.map((tenantData) =>
      Tenant.create({
        name: tenantData.name,
        database: tenantData.database,
        schema: tenantData.schema,
        description: tenantData.description || undefined,
        organizationCode: tenantData.organization_code || undefined,
        organizationName: tenantData.organization_name || undefined,
        category: tenantData.category as unknown as TenantCategory,
      })
    );
  }
}
