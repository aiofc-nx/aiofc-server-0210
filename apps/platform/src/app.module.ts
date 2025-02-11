import { join } from 'path';

import { ConfigModule } from '@aiofc/config';
// import { LoggerModule } from '@aiofc/pino-logger';
import { setupLoggerModule } from '@aiofc/pino-logger';
import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { setupClsModule } from './boostrap/cls-setup';
import { GlobalMiddleware } from './common/middleware/global.middleware';
@Module({
  imports: [
    ConfigModule.forRoot(join(__dirname, '')),
    setupClsModule(),
    setupLoggerModule(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // 应用全局中间件到所有路由
    console.log('MainModule: 应用全局中间件到所有路由');
    consumer.apply(GlobalMiddleware).forRoutes('*');
  }
}
