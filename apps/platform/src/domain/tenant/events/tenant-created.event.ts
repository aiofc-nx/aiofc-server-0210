import { DomainEvent } from '@/domain/shared/domain-event.base';

export class TenantCreatedEvent implements DomainEvent {
  constructor(
    public readonly tenantId: string,
    public readonly name: string,
    public readonly occurredOn: Date = new Date()
  ) {}
}
