[@aiofc/source](../../../../../index.md) / packages/config/src/lib/env-schema

# packages/config/src/lib/env-schema

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
     NODE_ENV: "test" | "development" | "production";
     port: number;
    }, {
     globalPrefix: string;
     NODE_ENV: "test" | "development" | "production";
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
     NODE_ENV: "test" | "development" | "production";
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
     NODE_ENV: "test" | "development" | "production";
     port: number;
    };
  logger: {
     colorize: boolean;
     defaultLevel: string;
     prettyLogs: boolean;
    };
}>;
```
