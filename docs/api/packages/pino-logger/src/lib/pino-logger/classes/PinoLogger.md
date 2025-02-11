[@aiofc/source](../../../../../../index.md) / [packages/pino-logger/src/lib/pino-logger](../index.md) / PinoLogger

# Class: PinoLogger

## Implements

- `PinoMethods`

## Constructors

### new PinoLogger()

```ts
new PinoLogger(__namedParameters): PinoLogger
```

#### Parameters

##### \_\_namedParameters

[`Params`](../../params/interfaces/Params.md)

#### Returns

[`PinoLogger`](PinoLogger.md)

## Properties

### context

```ts
protected context: string = '';
```

***

### contextName

```ts
protected readonly contextName: string;
```

***

### errorKey

```ts
protected readonly errorKey: string = 'err';
```

***

### root

```ts
readonly static root: Logger;
```

root is the most root logger that can be used to change params at runtime.
Accessible only when `useExisting` is not set to `true` in `Params`.
Readonly, but you can change it's properties.

## Accessors

### logger

#### Get Signature

```ts
get logger(): Logger
```

##### Returns

`Logger`

## Methods

### assign()

```ts
assign(fields): void
```

#### Parameters

##### fields

`Bindings`

#### Returns

`void`

***

### call()

```ts
protected call(method, ...args): void
```

#### Parameters

##### method

`Level`

##### args

\[`string`, `...args: any[]`\] | \[`object`, `string`, `...args: any[]`\]

#### Returns

`void`

***

### debug()

#### Call Signature

```ts
debug(msg, ...args): void
```

Log at `'debug'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.debug
```

#### Call Signature

```ts
debug(
   obj, 
   msg?, ...
   args?): void
```

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.debug
```

***

### error()

#### Call Signature

```ts
error(msg, ...args): void
```

Log at `'error'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.error
```

#### Call Signature

```ts
error(
   obj, 
   msg?, ...
   args?): void
```

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.error
```

***

### fatal()

#### Call Signature

```ts
fatal(msg, ...args): void
```

Log at `'fatal'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.fatal
```

#### Call Signature

```ts
fatal(
   obj, 
   msg?, ...
   args?): void
```

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.fatal
```

***

### info()

#### Call Signature

```ts
info(msg, ...args): void
```

Log at `'info'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.info
```

#### Call Signature

```ts
info(
   obj, 
   msg?, ...
   args?): void
```

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.info
```

***

### setContext()

```ts
setContext(value): void
```

#### Parameters

##### value

`string`

#### Returns

`void`

***

### trace()

#### Call Signature

```ts
trace(msg, ...args): void
```

Log at `'trace'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.trace
```

#### Call Signature

```ts
trace(
   obj, 
   msg?, ...
   args?): void
```

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.trace
```

***

### warn()

#### Call Signature

```ts
warn(msg, ...args): void
```

Log at `'warn'` level the given msg. If the first argument is an object, all its properties will be included in the JSON line.
If more args follows `msg`, these will be used to format `msg` using `util.format`.

##### Parameters

###### msg

`string`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.warn
```

#### Call Signature

```ts
warn(
   obj, 
   msg?, ...
   args?): void
```

##### Parameters

###### obj

`unknown`

###### msg?

`string`

###### args?

...`any`[]

##### Returns

`void`

##### Implementation of

```ts
PinoMethods.warn
```
