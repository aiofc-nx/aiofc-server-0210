[@aiofc/source](../../../../../../index.md) / [packages/pino-logger/src/lib/logger](../index.md) / Logger

# Class: Logger

## Implements

- `LoggerService`

## Constructors

### new Logger()

```ts
new Logger(logger, __namedParameters): Logger
```

#### Parameters

##### logger

[`PinoLogger`](../../pino-logger/classes/PinoLogger.md)

##### \_\_namedParameters

[`Params`](../../params/interfaces/Params.md)

#### Returns

[`Logger`](Logger.md)

## Properties

### contextName

```ts
private readonly contextName: string;
```

***

### logger

```ts
protected readonly logger: PinoLogger;
```

## Methods

### call()

```ts
private call(
   level, 
   message, ...
   optionalParams): void
```

#### Parameters

##### level

`Level`

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

***

### debug()

```ts
debug(message, ...optionalParams): void
```

Write a 'debug' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

```ts
LoggerService.debug
```

***

### error()

```ts
error(message, ...optionalParams): void
```

Write an 'error' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

```ts
LoggerService.error
```

***

### fatal()

```ts
fatal(message, ...optionalParams): void
```

Write a 'fatal' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

```ts
LoggerService.fatal
```

***

### isWrongExceptionsHandlerContract()

```ts
private isWrongExceptionsHandlerContract(
   level, 
   message, 
   params): params is [string]
```

#### Parameters

##### level

`Level`

##### message

`any`

##### params

`any`[]

#### Returns

`params is [string]`

***

### log()

```ts
log(message, ...optionalParams): void
```

Write a 'log' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

```ts
LoggerService.log
```

***

### verbose()

```ts
verbose(message, ...optionalParams): void
```

Write a 'verbose' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

```ts
LoggerService.verbose
```

***

### warn()

```ts
warn(message, ...optionalParams): void
```

Write a 'warn' level log.

#### Parameters

##### message

`any`

##### optionalParams

...`any`[]

#### Returns

`void`

#### Implementation of

```ts
LoggerService.warn
```
