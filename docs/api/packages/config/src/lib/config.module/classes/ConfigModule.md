[@aiofc/source](../../../../../../index.md) / [packages/config/src/lib/config.module](../index.md) / ConfigModule

# Class: ConfigModule

ConfigModule

职责：
1. 提供全局配置服务
2. 管理配置的加载和注入
3. 确保配置的单例性

## Constructors

### new ConfigModule()

```ts
new ConfigModule(): ConfigModule
```

#### Returns

[`ConfigModule`](ConfigModule.md)

## Methods

### forRoot()

```ts
static forRoot(configDir): DynamicModule
```

#### Parameters

##### configDir

`string`

#### Returns

`DynamicModule`
