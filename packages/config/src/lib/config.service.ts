import { join } from 'path';

import { ZodEnv } from '@aiofc/zod-env';
import { Injectable } from '@nestjs/common';
import { z } from 'zod';

import { EnvSchema, type EnvValidatedConfig } from './env-schema';
/**
 * ConfigService 类
 *
 * 这是一个工具类，负责把经过验证的环境变量（EnvValidatedConfig）分解为若干个配置组，
 * 这些配置组被暴露为属性，供应用程序使用。
 *
 * 职责：
 * 1. 管理应用程序的配置
 * 2. 通过依赖注入提供配置数据
 * 3. 提供类型安全的配置访问接口
 */
@Injectable()
export class ConfigService extends ZodEnv<EnvValidatedConfig> {
  constructor(configDir: string) {
    super(EnvSchema as z.ZodType<EnvValidatedConfig>, {
      configDir: join(configDir, '/assets'),
      configFilePrefix: 'app.config',
    });
  }

  get app() {
    return Object.freeze({ ...this.config.app });
  }

  get logger() {
    return Object.freeze({ ...this.config.logger });
  }

  get database() {
    return Object.freeze({ ...this.config.database });
  }
}

// export interface Config {
// ... other configs
//   tenant: {
//     databaseIsolation: boolean;
//     schemaIsolation: boolean;
//     schemaHeader: string;
//     databaseHeader: string;
//   };
// }

// const EnvSchema = z.object({
//   app: z.object({
//     port: z.number().min(1),
//     globalPrefix: z.string().default('api'),
//     NODE_ENV: z
//       .enum(['development', 'production', 'test'])
//       .default('development'),
//   }),
// logger: z.object({
//   trackingIdHeader: z.string().optional(),
// }),
// database: z.object({
//   port: z.number().min(1),
//   user: z.string(),
//   password: z.string(),
//   host: z.string(),
//   name: z.string(),
//   isolationStrategy: z.enum(['tenant', 'global']),
//   pool: z
//     .object({
//       max: z.number().min(1).optional(),
//       min: z.number().min(0).optional(),
//     })
//     .optional(),
// }),
// middleware: z.object({
//   // ... 其他中间件配置 ...
// }),
// tenant: z.object({
//   // ... 租户配置 ...
// }),
// });
