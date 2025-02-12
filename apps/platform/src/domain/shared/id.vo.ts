import { randomUUID } from 'crypto';

/**
 * 标识符值对象(Value Object)基类
 *
 * 用于创建和管理系统中的唯一标识符
 */
export abstract class Id {
  /**
   * 创建一个新的标识符实例
   *
   * @param value - 标识符的字符串值
   * @protected
   */
  protected constructor(private readonly value: string) {
    this.validate(value);
  }

  /**
   * 验证标识符值的有效性
   *
   * @param id - 要验证的标识符字符串
   * @throws {Error} 当标识符为空时抛出错误
   * @private
   */
  private validate(id: string): void {
    if (!id) throw new Error('ID不能为空');
  }

  /**
   * 比较两个标识符是否相等
   *
   * @param other - 要比较的另一个标识符
   * @returns 如果两个标识符相等则返回true，否则返回false
   */
  equals(other: Id): boolean {
    return this.value === other.value;
  }

  /**
   * 将标识符转换为字符串
   *
   * @returns 标识符的字符串表示
   */
  toString(): string {
    return this.value;
  }

  /**
   * 生成一个新的UUID标识符
   *
   * @returns 新生成的UUID字符串
   * @static
   */
  static generate(): string {
    return randomUUID();
  }

  /**
   * 从现有字符串创建标识符实例
   *
   * @param value - 用于创建标识符的字符串值
   * @returns 新的标识符实例
   * @static
   */
  static from(value: string): Id {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new (this as any)(value); // 使用 any 来绕过类型检查
  }
}
