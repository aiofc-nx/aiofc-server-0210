import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateTenantCommand } from '../commands/create-tenant.command';

import { Tenant } from '@/domain/tenant/entities/tenant.entity';
import { TenantRepository } from '@/domain/tenant/repositories/tenant.repository';

@CommandHandler(CreateTenantCommand)
export class CreateTenantHandler
  implements ICommandHandler<CreateTenantCommand>
{
  constructor(private readonly tenantRepository: TenantRepository) {}

  async execute(command: CreateTenantCommand): Promise<void> {
    const tenant = Tenant.create({
      name: command.name,
      database: command.database,
      schema: command.schema,
      description: command.description,
      organizationCode: command.organizationCode,
      organizationName: command.organizationName,
      category: command.category,
    });
    await this.tenantRepository.save(tenant);
  }
}
