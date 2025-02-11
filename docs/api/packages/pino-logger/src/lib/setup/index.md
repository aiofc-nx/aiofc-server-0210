[@aiofc/source](../../../../../index.md) / packages/pino-logger/src/lib/setup

# packages/pino-logger/src/lib/setup

## Functions

### setupLoggerModule()

```ts
function setupLoggerModule<ClsType>(customProps): DynamicModule
```

设置日志模块的配置函数

主要功能:
- 配置Pino日志记录器的行为
- 支持自定义请求属性
- 集成CLS(Continuation Local Storage)服务
- 提供灵活的日志格式化和序列化选项

工作机制:
1. 通过异步工厂方法创建日志配置
2. 使用ConfigService获取日志配置参数
3. 支持通过CLS服务在请求上下文中传递数据
4. 提供完整的请求生命周期日志记录

#### Type Parameters

• **ClsType** *extends* `ClsStore`

CLS存储类型参数

#### Parameters

##### customProps

(`req`, `res`, `clsService`?) => `Record`\<`string`, `string`\>

自定义属性回调函数,用于扩展日志属性

#### Returns

`DynamicModule`

配置好的LoggerModule动态模块
