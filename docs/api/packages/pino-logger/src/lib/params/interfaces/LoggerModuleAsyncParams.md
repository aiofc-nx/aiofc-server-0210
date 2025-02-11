[@aiofc/source](../../../../../../index.md) / [packages/pino-logger/src/lib/params](../index.md) / LoggerModuleAsyncParams

# Interface: LoggerModuleAsyncParams

## Extends

- `Pick`\<`ModuleMetadata`, `"imports"` \| `"providers"`\>

## Properties

### inject?

```ts
optional inject: any[];
```

***

### useFactory()

```ts
useFactory: (...args) => Params | Promise<Params>;
```

#### Parameters

##### args

...`any`[]

#### Returns

[`Params`](Params.md) \| `Promise`\<[`Params`](Params.md)\>
