import { ValueObject } from '@/domain/shared/value-object.base';

export class TenantCategory extends ValueObject<string> {
  static readonly ENTERPRISE = new TenantCategory('ENTERPRISE');
  static readonly INDIVIDUAL = new TenantCategory('INDIVIDUAL');
  static readonly GOVERNMENT = new TenantCategory('GOVERNMENT');
  static readonly EDUCATION = new TenantCategory('EDUCATION');
  static readonly OTHER = new TenantCategory('OTHER');

  private constructor(value: string) {
    super(value);
    this.validate(value);
  }

  private validate(value: string): void {
    const validCategories = [
      'ENTERPRISE',
      'INDIVIDUAL',
      'GOVERNMENT',
      'EDUCATION',
      'OTHER',
    ];
    if (!validCategories.includes(value)) {
      throw new Error(`Invalid tenant category: ${value}`);
    }
  }

  static create(value: string): TenantCategory {
    return new TenantCategory(value);
  }
}
