import { z } from 'zod';

export const EnvSchema = z.object({
  /**
   * API服务配置部分
   */
  app: z.object({
    port: z.number().min(1).default(3000), // API服务端口，默认3000
    globalPrefix: z.string().default('api'), // API全局路由前缀，默认'api'
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'), // 环境变量，默认'development'
  }),
  // 其他配置部分
  logger: z.object({
    colorize: z.boolean().default(false),
    prettyLogs: z.boolean().default(false),
    defaultLevel: z.string().default('info'),
  }),
  /**
   * 数据库配置部分
   */
  database: z.object({
    user: z.string(), // 数据库用户名
    password: z.string(), // 数据库密码
    host: z.string(), // 数据库主机地址
    port: z.coerce.number().default(5432),
    name: z.string(), // 数据库名称
  }),
});

export type EnvValidatedConfig = z.infer<typeof EnvSchema>;
