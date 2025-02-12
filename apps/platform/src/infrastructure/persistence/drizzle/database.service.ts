import { Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from '@/infrastructure/persistence/schemas';

@Injectable()
export class DatabaseService {
  private db: ReturnType<typeof drizzle<typeof schema>>;
  public insert: typeof this.db.insert;
  public select: typeof this.db.select;
  public update: typeof this.db.update;
  public delete: typeof this.db.delete;

  constructor() {
    const pool = new Pool({
      // 数据库连接配置
    });
    this.db = drizzle(pool, { schema });
    this.insert = this.db.insert.bind(this.db);
    this.select = this.db.select.bind(this.db);
    this.update = this.db.update.bind(this.db);
    this.delete = this.db.delete.bind(this.db);
  }
}
