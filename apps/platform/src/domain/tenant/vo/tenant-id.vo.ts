import { Id } from '@/domain/shared/id.vo';

export class TenantId extends Id {
  private constructor(value: string) {
    super(value);
  }

  static generate(): string {
    return super.generate();
  }

  static from(value: string): TenantId {
    return super.from(value) as TenantId;
  }
}
