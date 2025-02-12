import { TenantCategory } from '../vo/tenant-category.vo';
import { TenantId } from '../vo/tenant-id.vo';
import { TenantStatus } from '../vo/tenant-status.vo';

import { Entity } from '@/domain/shared/entity.base';

export class Tenant extends Entity<TenantId> {
  private _name: string;
  private _database: string;
  private _schema: string;
  private _description?: string;
  private _status: TenantStatus;
  private _organizationCode?: string;
  private _organizationName?: string;
  private _category: TenantCategory;

  constructor(
    id: TenantId,
    props: {
      name: string;
      database: string;
      schema: string;
      description?: string;
      status?: TenantStatus;
      organizationCode?: string;
      organizationName?: string;
      category?: TenantCategory;
    }
  ) {
    super(id, {
      tenantId: id.toString(),
    });
    this._name = props.name;
    this._database = props.database;
    this._schema = this.validateSchema(props.schema);
    this._description = props.description;
    this._status = props.status ?? TenantStatus.ACTIVE;
    this._organizationCode = props.organizationCode;
    this._organizationName = props.organizationName;
    this._category = props.category ?? TenantCategory.OTHER;
    this.checkInvariants();
  }

  // 获取器
  get name(): string {
    return this._name;
  }

  get database(): string {
    return this._database;
  }

  get schema(): string {
    return this._schema;
  }

  get description(): string | undefined {
    return this._description;
  }

  get status(): TenantStatus {
    return this._status;
  }

  get organizationCode(): string | undefined {
    return this._organizationCode;
  }

  get organizationName(): string | undefined {
    return this._organizationName;
  }

  get category(): TenantCategory {
    return this._category;
  }

  // 业务方法
  activate(): void {
    if (this._status === TenantStatus.ACTIVE) {
      throw new Error('租户已经处于激活状态');
    }
    this._status = TenantStatus.ACTIVE;
  }

  deactivate(): void {
    if (this._status === TenantStatus.INACTIVE) {
      throw new Error('租户已经处于停用状态');
    }
    this._status = TenantStatus.INACTIVE;
  }

  updateName(name: string): void {
    if (!name.trim()) {
      throw new Error('租户名称不能为空');
    }
    this._name = name;
  }

  updateDescription(description?: string): void {
    this._description = description;
  }

  // 验证方法
  private validateSchema(schema: string): string {
    if (!schema.startsWith('t_')) {
      throw new Error('Schema必须以"t_"开头');
    }
    return schema;
  }

  private checkInvariants(): void {
    if (!this._name?.trim()) {
      throw new Error('Tenant name cannot be empty');
    }
    if (!this._schema.startsWith('t_')) {
      throw new Error('Schema must start with t_');
    }
  }

  // 工厂方法
  static create(props: {
    name: string;
    database: string;
    schema: string;
    description?: string;
    organizationCode?: string;
    organizationName?: string;
    category?: TenantCategory;
  }): Tenant {
    const id = TenantId.from(TenantId.generate());
    return new Tenant(id, props);
  }
}
