[@aiofc/source](../../../../../index.md) / packages/pino-logger/src/lib/params

# packages/pino-logger/src/lib/params

## Interfaces

| Interface | Description |
| ------ | ------ |
| [LoggerModuleAsyncParams](interfaces/LoggerModuleAsyncParams.md) | - |
| [Params](interfaces/Params.md) | - |

## Type Aliases

### PassedLogger

```ts
type PassedLogger = object;
```

#### Type declaration

##### logger

```ts
logger: Logger;
```

## Variables

### PARAMS\_PROVIDER\_TOKEN

```ts
const PARAMS_PROVIDER_TOKEN: "pino-params" = 'pino-params';
```

## Functions

### isPassedLogger()

```ts
function isPassedLogger(pinoHttpProp): pinoHttpProp is PassedLogger
```

#### Parameters

##### pinoHttpProp

`any`

#### Returns

`pinoHttpProp is PassedLogger`
