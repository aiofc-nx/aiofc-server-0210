[@aiofc/source](../../../../../../../index.md) / [apps/platform/src/common/middleware/global.middleware](../index.md) / GlobalMiddleware

# Class: GlobalMiddleware

## Implements

- `NestMiddleware`

## Constructors

### new GlobalMiddleware()

```ts
new GlobalMiddleware(): GlobalMiddleware
```

#### Returns

[`GlobalMiddleware`](GlobalMiddleware.md)

## Methods

### use()

```ts
use(
   req, 
   _res, 
   next): void
```

#### Parameters

##### req

`FastifyRequest`

##### \_res

`FastifyReply`

##### next

() => `void`

#### Returns

`void`

#### Implementation of

```ts
NestMiddleware.use
```
