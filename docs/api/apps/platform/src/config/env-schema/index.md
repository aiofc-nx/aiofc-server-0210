[@aiofc/source](../../../../../index.md) / apps/platform/src/config/env-schema

# apps/platform/src/config/env-schema

## Type Aliases

### EnvValidatedConfig

```ts
type EnvValidatedConfig = z.infer<typeof EnvSchema>;
```

## Variables

### EnvSchema

```ts
const EnvSchema: ZodObject<{
  app: ZodObject<{
     globalPrefix: ZodDefault<ZodString>;
     NODE_ENV: ZodDefault<ZodEnum<["development", "production", "test"]>>;
     port: ZodDefault<ZodNumber>;
    }, "strip", ZodTypeAny, {
     globalPrefix: string;
     NODE_ENV: "development" | "production" | "test";
     port: number;
    }, {
     globalPrefix: string;
     NODE_ENV: "development" | "production" | "test";
     port: number;
    }>;
  logger: ZodObject<{
     colorize: ZodDefault<ZodBoolean>;
     defaultLevel: ZodDefault<ZodString>;
     prettyLogs: ZodDefault<ZodBoolean>;
    }, "strip", ZodTypeAny, {
     colorize: boolean;
     defaultLevel: string;
     prettyLogs: boolean;
    }, {
     colorize: boolean;
     defaultLevel: string;
     prettyLogs: boolean;
    }>;
 }, "strip", ZodTypeAny, {
  app: {
     globalPrefix: string;
     NODE_ENV: "development" | "production" | "test";
     port: number;
    };
  logger: {
     colorize: boolean;
     defaultLevel: string;
     prettyLogs: boolean;
    };
 }, {
  app: {
     globalPrefix: string;
     NODE_ENV: "development" | "production" | "test";
     port: number;
    };
  logger: {
     colorize: boolean;
     defaultLevel: string;
     prettyLogs: boolean;
    };
}>;
```
