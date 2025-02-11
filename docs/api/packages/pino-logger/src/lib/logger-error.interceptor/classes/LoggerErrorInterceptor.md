[@aiofc/source](../../../../../../index.md) / [packages/pino-logger/src/lib/logger-error.interceptor](../index.md) / LoggerErrorInterceptor

# Class: LoggerErrorInterceptor

## Implements

- `NestInterceptor`

## Constructors

### new LoggerErrorInterceptor()

```ts
new LoggerErrorInterceptor(): LoggerErrorInterceptor
```

#### Returns

[`LoggerErrorInterceptor`](LoggerErrorInterceptor.md)

## Methods

### intercept()

```ts
intercept(context, next): Observable<any> | Promise<Observable<any>>
```

Method to implement a custom interceptor.

#### Parameters

##### context

`ExecutionContext`

an `ExecutionContext` object providing methods to access the
route handler and class about to be invoked.

##### next

`CallHandler`

a reference to the `CallHandler`, which provides access to an
`Observable` representing the response stream from the route handler.

#### Returns

`Observable`\<`any`\> \| `Promise`\<`Observable`\<`any`\>\>

#### Implementation of

```ts
NestInterceptor.intercept
```
