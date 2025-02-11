[@aiofc/source](../../../../../../index.md) / [packages/pino-logger/src/lib/params](../index.md) / Params

# Interface: Params

## Properties

### assignResponse?

```ts
optional assignResponse: boolean;
```

Optional parameter to also assign the response logger during calls to
`PinoLogger.assign`. By default, `assign` does not impact response logs
(e.g.`Request completed`).

***

### exclude?

```ts
optional exclude: (string | RouteInfo)[];
```

Optional parameter for routing. It should implement interface of
parameters of NestJS built-in `MiddlewareConfigProxy['forRoutes']`.

#### See

https://docs.nestjs.com/middleware#applying-middleware
It can be used for both disabling automatic req/res logs and
removing request context from following logs. It works for all requests by
default. If you only need to turn off the automatic request/response
logging for some specific (or all) routes but keep request context for app
logs use `pinoHttp.autoLogging` field.

***

### forRoutes?

```ts
optional forRoutes: (string | Type<any> | RouteInfo)[];
```

Optional parameter for routing. It should implement interface of
parameters of NestJS built-in `MiddlewareConfigProxy['forRoutes']`.

#### See

https://docs.nestjs.com/middleware#applying-middleware
It can be used for both disabling automatic req/res logs and
removing request context from following logs. It works for all requests by
default. If you only need to turn off the automatic request/response
logging for some specific (or all) routes but keep request context for app
logs use `pinoHttp.autoLogging` field.

***

### pinoHttp?

```ts
optional pinoHttp: 
  | Options<IncomingMessage, ServerResponse<IncomingMessage>, never>
  | DestinationStream
  | [Options<IncomingMessage, ServerResponse<IncomingMessage>, never>, DestinationStream];
```

Optional parameters for `pino-http` module

#### See

https://github.com/pinojs/pino-http#pinohttpopts-stream

***

### renameContext?

```ts
optional renameContext: string;
```

Optional parameter to change property name `context` in resulted logs,
so logs will be like:
{"level":30, ... "RENAME_CONTEXT_VALUE_HERE":"AppController" }

***

### useExisting?

```ts
optional useExisting: true;
```

Optional parameter to skip pino configuration in case you are using
FastifyAdapter, and already configure logger in adapter's config. The Pros
and cons of this approach are described in the FAQ section of the
documentation:

#### See

https://github.com/iamolegga/nestjs-pino#faq.
