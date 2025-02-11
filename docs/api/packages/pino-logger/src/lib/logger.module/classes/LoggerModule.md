[@aiofc/source](../../../../../../index.md) / [packages/pino-logger/src/lib/logger.module](../index.md) / LoggerModule

# Class: LoggerModule

## Implements

- `NestModule`

## Constructors

### new LoggerModule()

```ts
new LoggerModule(params): LoggerModule
```

#### Parameters

##### params

[`Params`](../../params/interfaces/Params.md)

#### Returns

[`LoggerModule`](LoggerModule.md)

## Properties

### params

```ts
private readonly params: Params;
```

## Methods

### configure()

```ts
configure(consumer): void
```

#### Parameters

##### consumer

`MiddlewareConsumer`

#### Returns

`void`

#### Implementation of

```ts
NestModule.configure
```

***

### forRoot()

```ts
static forRoot(params?): DynamicModule
```

#### Parameters

##### params?

[`Params`](../../params/interfaces/Params.md)

#### Returns

`DynamicModule`

***

### forRootAsync()

```ts
static forRootAsync(params): DynamicModule
```

#### Parameters

##### params

[`LoggerModuleAsyncParams`](../../params/interfaces/LoggerModuleAsyncParams.md)

#### Returns

`DynamicModule`
