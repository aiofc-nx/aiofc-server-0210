import { DomainEvent } from './domain-event.base';
import { Id } from './id.vo';
/**
 * 实体基类
 *
 * @template TId - 实体标识符的类型，必须是Id的子类
 */
export abstract class Entity<TId extends Id> {
  private readonly _id: TId; // 实体的唯一标识符
  private readonly _tenantId: Id; // 租户标识符
  private readonly _createdAt: Date; // 创建时间
  private _updatedAt: Date; // 更新时间
  private _deletedAt?: Date; // 删除时间（如果存在则表示已删除）
  private _domainEvents: DomainEvent[] = [];

  /**
   * 创建一个新的实体实例
   *
   * @param id - 实体的唯一标识符
   * @param props - 实体的属性
   * @param props.tenantId - 租户标识符
   * @param props.createdAt - 创建时间（可选）
   * @param props.updatedAt - 更新时间（可选）
   * @param props.deletedAt - 删除时间（可选）
   */
  protected constructor(
    id: TId,
    props: {
      tenantId: string;
      createdAt?: Date;
      updatedAt?: Date;
      deletedAt?: Date;
    }
  ) {
    this._id = id;
    this._tenantId = Id.from(props.tenantId);
    this._createdAt = props.createdAt ?? new Date();
    this._updatedAt = props.updatedAt ?? new Date();
    this._deletedAt = props.deletedAt;
  }

  /**
   * 获取实体的唯一标识符
   *
   * @returns 实体的唯一标识符
   */
  get id(): TId {
    return this._id;
  }

  /**
   * 获取租户标识符
   *
   * @returns 租户标识符的字符串表示
   */
  get tenantId(): string {
    return this._tenantId.toString();
  }

  /**
   * 获取创建时间
   *
   * @returns 实体的创建时间
   */
  get createdAt(): Date {
    return this._createdAt;
  }

  /**
   * 获取更新时间
   *
   * @returns 实体的更新时间
   */
  get updatedAt(): Date {
    return this._updatedAt;
  }

  /**
   * 获取删除时间
   *
   * @returns 实体的删除时间（如果存在则返回，否者返回undefined）
   */
  get deletedAt(): Date | undefined {
    return this._deletedAt;
  }

  /**
   * 检查实体是否已被删除
   *
   * @returns 如果实体已被删除则返回true，否则返回false
   */
  get isDeleted(): boolean {
    return !!this._deletedAt;
  }

  /**
   * 标记实体为已更新
   */
  protected markAsUpdated(): void {
    this._updatedAt = new Date();
  }

  /**
   * 软删除实体
   */
  protected softDelete(): void {
    this._deletedAt = new Date();
    this.markAsUpdated();
  }

  /**
   * 恢复已删除的实体
   */
  protected restore(): void {
    this._deletedAt = undefined;
    this.markAsUpdated();
  }

  /**
   * 比较两个实体是否相等
   *
   * @param other - 另一个要比较的实体
   * @returns 如果两个实体相等则返回true，否则返回false
   */
  equals(other: Entity<TId>): boolean {
    return this._id.equals(other._id);
  }

  protected addDomainEvent(event: DomainEvent): void {
    this._domainEvents.push(event);
  }

  public clearDomainEvents(): DomainEvent[] {
    const events = [...this._domainEvents];
    this._domainEvents = [];
    return events;
  }
}
