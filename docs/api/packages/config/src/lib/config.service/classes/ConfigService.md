[@aiofc/source](../../../../../../index.md) / [packages/config/src/lib/config.service](../index.md) / ConfigService

# Class: ConfigService

ConfigService 类

这是一个工具类，负责把经过验证的环境变量（EnvValidatedConfig）分解为若干个配置组，
这些配置组被暴露为属性，供应用程序使用。

职责：
1. 管理应用程序的配置
2. 通过依赖注入提供配置数据
3. 提供类型安全的配置访问接口

## Extends

- [`ZodEnv`](../../../../../zod-env/src/lib/zod-env/classes/ZodEnv.md)\<[`EnvValidatedConfig`](../../env-schema/index.md#envvalidatedconfig)\>

## Constructors

### new ConfigService()

```ts
new ConfigService(configDir): ConfigService
```

#### Parameters

##### configDir

`string`

#### Returns

[`ConfigService`](ConfigService.md)

#### Overrides

[`ZodEnv`](../../../../../zod-env/src/lib/zod-env/classes/ZodEnv.md).[`constructor`](../../../../../zod-env/src/lib/zod-env/classes/ZodEnv.md#constructors)

## Accessors

### app

#### Get Signature

```ts
get app(): Readonly<{
  globalPrefix: string;
  NODE_ENV: "test" | "development" | "production";
  port: number;
}>
```

##### Returns

`Readonly`\<\{
  `globalPrefix`: `string`;
  `NODE_ENV`: `"test"` \| `"development"` \| `"production"`;
  `port`: `number`;
 \}\>

***

### config

#### Get Signature

```ts
get config(): T
```

获取验证后的配置对象

##### Returns

`T`

类型安全的配置对象

#### Inherited from

[`ZodEnv`](../../../../../zod-env/src/lib/zod-env/classes/ZodEnv.md).[`config`](../../../../../zod-env/src/lib/zod-env/classes/ZodEnv.md#config)

***

### logger

#### Get Signature

```ts
get logger(): Readonly<{
  colorize: boolean;
  defaultLevel: string;
  prettyLogs: boolean;
}>
```

##### Returns

`Readonly`\<\{
  `colorize`: `boolean`;
  `defaultLevel`: `string`;
  `prettyLogs`: `boolean`;
 \}\>
