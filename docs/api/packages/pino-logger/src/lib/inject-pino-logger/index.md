[@aiofc/source](../../../../../index.md) / packages/pino-logger/src/lib/inject-pino-logger

# packages/pino-logger/src/lib/inject-pino-logger

## Functions

### createProvidersForDecorated()

```ts
function createProvidersForDecorated(): Provider<PinoLogger>[]
```

#### Returns

`Provider`\<[`PinoLogger`](../pino-logger/classes/PinoLogger.md)\>[]

***

### getLoggerToken()

```ts
function getLoggerToken(context): string
```

#### Parameters

##### context

`string`

#### Returns

`string`

***

### InjectPinoLogger()

```ts
function InjectPinoLogger(context): PropertyDecorator & ParameterDecorator
```

#### Parameters

##### context

`string` = `''`

#### Returns

`PropertyDecorator` & `ParameterDecorator`
